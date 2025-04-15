'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function BinaryGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [texturesLoaded, setTexturesLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    let animationFrameId: number

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null // Transparent background
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    
    // Make it responsive
    const updateSize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    
    updateSize()
    containerRef.current.appendChild(renderer.domElement)
    window.addEventListener('resize', updateSize)

    // Lights - Adjusted for more realism
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2) // Softer ambient
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8) // Stronger sunlight
    directionalLight.position.set(5, 3, 5)
    scene.add(directionalLight)

    // Texture Loader
    const textureLoader = new THREE.TextureLoader()
    let earthTexture: THREE.Texture | null = null
    let cloudTexture: THREE.Texture | null = null

    // Load textures - Using placeholder URLs, replace with actual URLs if needed
    const earthTextureUrl = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57735/land_ocean_ice_cloud_2048.jpg'
    const cloudTextureUrl = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57747/cloud_combined_2048.jpg'

    let texturesToLoad = 2
    const onTextureLoad = () => {
      texturesToLoad -= 1
      if (texturesToLoad === 0) {
        setTexturesLoaded(true)
        // Start animation only after textures are loaded
        animate()
      }
    }

    textureLoader.load(earthTextureUrl, (texture) => {
      earthTexture = texture
      earthTexture.colorSpace = THREE.SRGBColorSpace
      onTextureLoad()
    }, undefined, (error) => {
      console.error('Error loading Earth texture:', error)
      onTextureLoad() // Still count as loaded to avoid blocking
    })

    textureLoader.load(cloudTextureUrl, (texture) => {
      cloudTexture = texture
      onTextureLoad()
    }, undefined, (error) => {
      console.error('Error loading Cloud texture:', error)
      onTextureLoad() // Still count as loaded
    })

    // Create realistic Earth sphere
    const globeRadius = 3
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64)
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture, // Apply Earth texture
      roughness: 0.8, // More matte finish
      metalness: 0.1, // Less metallic
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Create cloud layer
    const cloudGeometry = new THREE.SphereGeometry(globeRadius * 1.02, 64, 64)
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4, // Adjust cloud opacity
      blending: THREE.NormalBlending, // Use NormalBlending for clouds
      depthWrite: false, // Render clouds after Earth
    })
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial)
    scene.add(clouds)

    // Create atmospheric glow - more subtle and realistic
    const glowGeometry = new THREE.SphereGeometry(globeRadius * 1.05, 64, 64)
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        c: { value: 0.5 }, // Coefficient
        p: { value: 4.0 }, // Power
        glowColor: { value: new THREE.Color(0x80a0c0) }, // Light blue-gray glow
        viewVector: { value: new THREE.Vector3() }
      },
      vertexShader: `
        uniform vec3 viewVector;
        uniform float c;
        uniform float p;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(c - dot(vNormal, vNormel), p);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, intensity * 0.6);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    })
    const atmosphere = new THREE.Mesh(glowGeometry, glowMaterial)
    atmosphere.scale.set(1.1, 1.1, 1.1)
    scene.add(atmosphere)

    // --- Holographic Elements (Kept subtle) ---

    // Add orbiting rings - cleaner, more subtle
    const ringCount = 2
    const rings: THREE.Mesh[] = []
    for (let i = 0; i < ringCount; i++) {
      const ringRadius = globeRadius * (1.4 + i * 0.5)
      const ringGeometry = new THREE.RingGeometry(ringRadius - 0.02, ringRadius + 0.02, 128)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x6a7784,
        transparent: true,
        opacity: 0.15 - (i * 0.05), // Reduced opacity
        side: THREE.DoubleSide
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2 + (i * Math.PI / 6)
      ring.rotation.y = i * Math.PI / 4
      scene.add(ring)
      rings.push(ring)
    }

    // Add data stream lines that orbit the globe - subtle
    const orbiterCount = 2 // Reduced orbiters
    const orbiters: Array<{ orbit: THREE.Line; packets: THREE.Mesh[] }> = []
    for (let i = 0; i < orbiterCount; i++) {
      const orbitRadius = globeRadius * (1.6 + i * 0.6) // Adjusted radius
      const orbitGeometry = new THREE.BufferGeometry()
      const points = []
      const segments = 128
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(theta) * orbitRadius, 0, Math.sin(theta) * orbitRadius))
      }
      orbitGeometry.setFromPoints(points)
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x545454, transparent: true, opacity: 0.15 })
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial)
      orbit.rotation.x = Math.PI / 4 + (i * Math.PI / 8)
      orbit.rotation.z = i * Math.PI / 3
      scene.add(orbit)
      
      // Data packets - more subtle
      const packetCount = 4 + i * 2
      const packets: THREE.Mesh[] = []
      for (let j = 0; j < packetCount; j++) {
        const packetGeometry = new THREE.SphereGeometry(0.08, 8, 8) // Smaller spheres
        const packetMaterial = new THREE.MeshBasicMaterial({ color: 0x708090, transparent: true, opacity: 0.6 })
        const packet = new THREE.Mesh(packetGeometry, packetMaterial)
        const angle = (j / packetCount) * Math.PI * 2
        packet.position.x = Math.cos(angle) * orbitRadius
        packet.position.z = Math.sin(angle) * orbitRadius
        packet.userData = { angle, speed: 0.008 + Math.random() * 0.005 }
        orbit.add(packet)
        packets.push(packet)
      }
      orbiters.push({ orbit, packets })
    }

    // Floating highlight dots - fewer and dimmer
    const highlightCount = 20
    const highlightGeometry = new THREE.BufferGeometry()
    const highlightPositions = new Float32Array(highlightCount * 3)
    const highlightSizes = new Float32Array(highlightCount)
    const highlightColors = new Float32Array(highlightCount * 3)
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    if(ctx) {
        ctx.beginPath()
        ctx.arc(16, 16, 14, 0, Math.PI * 2)
        ctx.fillStyle = 'white'
        ctx.fill()
    }
    const highlightTexture = new THREE.CanvasTexture(canvas)

    for (let i = 0; i < highlightCount; i++) {
      const radius = globeRadius * (1.2 + Math.random() * 1.5)
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      highlightPositions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
      highlightPositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      highlightPositions[i * 3 + 2] = radius * Math.cos(theta)
      highlightSizes[i] = Math.random() * 0.06 + 0.02 // Smaller size
      const brightness = 0.4 + Math.random() * 0.3 // Dimmer
      highlightColors[i * 3] = brightness
      highlightColors[i * 3 + 1] = brightness
      highlightColors[i * 3 + 2] = brightness
    }
    highlightGeometry.setAttribute('position', new THREE.BufferAttribute(highlightPositions, 3))
    highlightGeometry.setAttribute('size', new THREE.BufferAttribute(highlightSizes, 1))
    highlightGeometry.setAttribute('color', new THREE.BufferAttribute(highlightColors, 3))
    const highlightMaterial = new THREE.PointsMaterial({
      size: 0.08,
      map: highlightTexture,
      transparent: true,
      alphaTest: 0.1,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const highlights = new THREE.Points(highlightGeometry, highlightMaterial)
    scene.add(highlights)

    // --- Animation Loop ---
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      
      const elapsedTime = clock.getElapsedTime()
      
      // Rotate globe and clouds
      globe.rotation.y += 0.0015
      clouds.rotation.y += 0.001
      
      // Rotate rings slowly
      rings.forEach((ring, i) => { ring.rotation.z += 0.0005 * (i + 1) })
      
      // Update atmosphere view vector
      const viewVector = new THREE.Vector3().subVectors(camera.position, atmosphere.position)
      glowMaterial.uniforms.viewVector.value = viewVector
      
      // Animate data packets
      orbiters.forEach(orbiter => {
        orbiter.packets.forEach(packet => {
          if (packet.userData && typeof packet.userData === 'object' && 'angle' in packet.userData && 'speed' in packet.userData) {
            packet.userData.angle += packet.userData.speed
            const radius = packet.position.length()
            packet.position.x = Math.cos(packet.userData.angle as number) * radius
            packet.position.z = Math.sin(packet.userData.angle as number) * radius
          }
        })
      })
      
      // Animate highlight dots
      const highlightSizes = highlightGeometry.attributes.size.array
      const highlightPositions = highlightGeometry.attributes.position.array
      for (let i = 0; i < highlightCount; i++) {
        highlightSizes[i] = (0.04 + Math.random() * 0.04) * (Math.sin(elapsedTime * 2 + i) * 0.3 + 0.7)
        const driftSpeed = 0.003
        highlightPositions[i * 3] += (Math.random() - 0.5) * driftSpeed
        highlightPositions[i * 3 + 1] += (Math.random() - 0.5) * driftSpeed
        highlightPositions[i * 3 + 2] += (Math.random() - 0.5) * driftSpeed
        const x = highlightPositions[i * 3], y = highlightPositions[i * 3 + 1], z = highlightPositions[i * 3 + 2]
        const distance = Math.sqrt(x * x + y * y + z * z)
        if (distance < globeRadius * 1.2 || distance > globeRadius * 2.7) {
          const phi = Math.random() * Math.PI * 2
          const theta = Math.random() * Math.PI
          const newRadius = globeRadius * (1.2 + Math.random() * 1.5)
          highlightPositions[i * 3] = newRadius * Math.sin(theta) * Math.cos(phi)
          highlightPositions[i * 3 + 1] = newRadius * Math.sin(theta) * Math.sin(phi)
          highlightPositions[i * 3 + 2] = newRadius * Math.cos(theta)
        }
      }
      highlightGeometry.attributes.size.needsUpdate = true
      highlightGeometry.attributes.position.needsUpdate = true
      
      // Camera movement
      const cameraRadius = 10
      const cameraSpeed = 0.03 // Slower camera rotation
      camera.position.x = Math.sin(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.z = Math.cos(elapsedTime * cameraSpeed) * cameraRadius * 0.8
      camera.position.y = 4 + Math.sin(elapsedTime * 0.05) * 0.5 // Slower vertical oscillation
      camera.lookAt(0, 0, 0)
      
      renderer.render(scene, camera)
    }
    
    // Don't start animation until textures are potentially loaded
    // animate() // Moved to onTextureLoad callback
    
    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      // Dispose geometries, materials, textures if needed
      globeGeometry.dispose()
      globeMaterial.map?.dispose()
      globeMaterial.dispose()
      cloudGeometry.dispose()
      cloudMaterial.map?.dispose()
      cloudMaterial.dispose()
      glowGeometry.dispose()
      glowMaterial.dispose()
      rings.forEach(ring => {
        ring.geometry.dispose()
        if (Array.isArray(ring.material)) {
          ring.material.forEach(mat => mat.dispose())
        } else {
          ring.material.dispose()
        }
      })
      orbiters.forEach(orbiter => {
        orbiter.orbit.geometry.dispose();
        if (Array.isArray(orbiter.orbit.material)) {
          orbiter.orbit.material.forEach(mat => mat.dispose())
        } else {
          orbiter.orbit.material.dispose()
        }
        orbiter.packets.forEach(packet => {
          packet.geometry.dispose()
          if (Array.isArray(packet.material)) {
            packet.material.forEach(mat => mat.dispose())
          } else {
            packet.material.dispose()
          }
        })
      })
      highlightGeometry.dispose()
      highlightMaterial.map?.dispose()
      highlightMaterial.dispose()

      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="w-full aspect-square overflow-hidden relative"
    >
      {!texturesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-black text-sm">Loading Globe...</div>
        </div>
      )}
    </div>
  )
} 
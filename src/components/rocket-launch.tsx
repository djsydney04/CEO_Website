'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function RocketLaunch() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null // Transparent background
    scene.fog = new THREE.Fog(0xcccccc, 15, 80) // Add fog for depth but more subtle
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparency
    })
    renderer.setPixelRatio(window.devicePixelRatio) // Use device pixel ratio for crisp rendering
    
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
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Create rocket body with more modern design
    const rocketGeometry = new THREE.CylinderGeometry(0.4, 0.6, 4, 32)
    const rocketMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x545454,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    })
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial)
    
    // Create a more aerodynamic nose
    const noseGeometry = new THREE.ConeGeometry(0.4, 1.5, 32)
    const noseMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x666666,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    })
    const nose = new THREE.Mesh(noseGeometry, noseMaterial)
    nose.position.y = 2.75
    rocket.add(nose)

    // Add modern window design
    const windowGeometry = new THREE.RingGeometry(0.15, 0.2, 32)
    const windowMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.5,
      thickness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      emissive: 0xffffff,
      emissiveIntensity: 0.2
    })
    
    // Create three evenly spaced windows
    for (let i = 0; i < 3; i++) {
      const window = new THREE.Mesh(windowGeometry, windowMaterial)
      window.position.y = 0.5 + (i * 1)
      window.position.z = 0.39
      window.rotation.x = Math.PI / 2
      rocket.add(window)
    }

    // Create modern fins
    const finShape = new THREE.Shape()
    finShape.moveTo(0, 0)
    finShape.lineTo(1.5, -0.5)
    finShape.lineTo(1.2, -1.8)
    finShape.lineTo(0, -1.5)
    finShape.lineTo(0, 0)

    const finExtrudeSettings = {
      steps: 1,
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 5
    }

    const finGeometry = new THREE.ExtrudeGeometry(finShape, finExtrudeSettings)
    const finMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x666666,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    })
    
    // Add three fins with better positioning
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial)
      fin.position.y = -1.8
      fin.rotation.y = (i / 3) * Math.PI * 2
      fin.scale.set(0.8, 0.8, 1)
      rocket.add(fin)
    }

    // Add modern engine section
    const engineGeometry = new THREE.CylinderGeometry(0.7, 0.8, 0.4, 32)
    const engineMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x333333,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    })
    const engine = new THREE.Mesh(engineGeometry, engineMaterial)
    engine.position.y = -2.2
    rocket.add(engine)

    // Create modern engine nozzles
    const nozzleGeometry = new THREE.CylinderGeometry(0.15, 0.25, 0.6, 32)
    const nozzleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x222222,
      roughness: 0.3,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    })
    
    // Add three nozzles in a triangular pattern
    for (let i = 0; i < 3; i++) {
      const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial)
      const angle = (i / 3) * Math.PI * 2
      nozzle.position.x = Math.cos(angle) * 0.3
      nozzle.position.z = Math.sin(angle) * 0.3
      nozzle.position.y = -2.5
      rocket.add(nozzle)
    }

    // Create modern exhaust effect
    const particleCount = 1000
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSizes = new Float32Array(particleCount)
    const particleColors = new Float32Array(particleCount * 3)
    
    const exhaustColors = [
      new THREE.Color(0xffffff), // White core
      new THREE.Color(0xcccccc), // Light gray
      new THREE.Color(0x999999), // Medium gray
      new THREE.Color(0x666666)  // Dark gray
    ]
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 0.5
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 2 - 2.5
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5
      particleSizes[i] = Math.random() * 0.3 + 0.1
      
      const color = exhaustColors[Math.floor(Math.random() * exhaustColors.length)]
      particleColors[i * 3] = color.r
      particleColors[i * 3 + 1] = color.g
      particleColors[i * 3 + 2] = color.b
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
    
    // Create a more realistic particle texture
    const particleTexture = new THREE.TextureLoader().load('/particle.png')
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: particleTexture,
      transparent: true,
      alphaTest: 0.1,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    rocket.add(particleSystem)

    // Add modern engine glow
    const glowGeometry = new THREE.SphereGeometry(0.4, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    })
    
    for (let i = 0; i < 3; i++) {
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      const angle = (i / 3) * Math.PI * 2
      glow.position.x = Math.cos(angle) * 0.3
      glow.position.z = Math.sin(angle) * 0.3
      glow.position.y = -2.7
      rocket.add(glow)
    }

    // Add atmospheric effects
    const atmosphereParticleCount = 500
    const atmosphereGeometry = new THREE.BufferGeometry()
    const atmospherePositions = new Float32Array(atmosphereParticleCount * 3)
    const atmosphereSizes = new Float32Array(atmosphereParticleCount)
    
    for (let i = 0; i < atmosphereParticleCount; i++) {
      atmospherePositions[i * 3] = (Math.random() - 0.5) * 30
      atmospherePositions[i * 3 + 1] = Math.random() * 40 - 20
      atmospherePositions[i * 3 + 2] = (Math.random() - 0.5) * 30
      atmosphereSizes[i] = Math.random() * 0.2 + 0.1
    }
    
    atmosphereGeometry.setAttribute('position', new THREE.BufferAttribute(atmospherePositions, 3))
    atmosphereGeometry.setAttribute('size', new THREE.BufferAttribute(atmosphereSizes, 1))
    
    const atmosphereMaterial = new THREE.PointsMaterial({
      size: 0.3,
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    
    const atmosphere = new THREE.Points(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Enhanced lighting setup
    const sceneAmbientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(sceneAmbientLight)
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
    mainLight.position.set(5, 5, 5)
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5)
    fillLight.position.set(-5, -5, -5)
    scene.add(fillLight)

    const engineLight = new THREE.PointLight(0xffffff, 2, 10)
    engineLight.position.y = -2.7
    rocket.add(engineLight)

    // Initial position and camera setup
    rocket.position.set(0, -5, 0)
    camera.position.set(8, 0, 8)
    camera.lookAt(0, 0, 0)

    // Enhanced animation
    let frame = 0
    const startTime = Date.now()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const elapsedTime = (Date.now() - startTime) / 1000
      
      // Smooth rocket ascent
      const maxHeight = 25
      const duration = 10
      const t = Math.min(elapsedTime / duration, 1)
      const easeInOutCubic = t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2
      
      rocket.position.y = -5 + (maxHeight * easeInOutCubic)
      
      // Natural rocket movement
      const wobbleAmount = Math.max(0.2 - easeInOutCubic * 0.15, 0.02)
      rocket.rotation.z = Math.sin(elapsedTime * 2) * wobbleAmount
      rocket.rotation.x = Math.cos(elapsedTime * 1.5) * wobbleAmount * 0.5
      
      // Particle system update
      const positions = particleGeometry.attributes.position.array as Float32Array
      const sizes = particleGeometry.attributes.size.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.1
        positions[i * 3 + 1] -= Math.random() * 0.3
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.1
        
        sizes[i] *= 0.96
        
        if (positions[i * 3 + 1] < -4 || sizes[i] < 0.1) {
          positions[i * 3] = (Math.random() - 0.5) * 0.5
          positions[i * 3 + 1] = -2.5
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5
          sizes[i] = Math.random() * 0.3 + 0.1
        }
      }
      
      particleGeometry.attributes.position.needsUpdate = true
      particleGeometry.attributes.size.needsUpdate = true
      
      // Atmosphere particles update
      const atmospherePositions = atmosphereGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < atmosphereParticleCount; i++) {
        atmospherePositions[i * 3 + 1] -= 0.1
        
        if (atmospherePositions[i * 3 + 1] < -20) {
          atmospherePositions[i * 3 + 1] = 20
          atmospherePositions[i * 3] = (Math.random() - 0.5) * 30
          atmospherePositions[i * 3 + 2] = (Math.random() - 0.5) * 30
        }
      }
      atmosphereGeometry.attributes.position.needsUpdate = true
      
      // Dynamic camera follow
      const targetY = rocket.position.y * 0.7
      camera.position.y += (targetY - camera.position.y) * 0.05
      
      // Camera rotation around rocket
      const cameraAngle = elapsedTime * 0.2
      const cameraRadius = 8 + Math.sin(elapsedTime * 0.5) * 2
      camera.position.x = Math.sin(cameraAngle) * cameraRadius
      camera.position.z = Math.cos(cameraAngle) * cameraRadius
      camera.lookAt(rocket.position)
      
      // Engine light intensity variation
      engineLight.intensity = 1.5 + Math.sin(elapsedTime * 20) * 0.5

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(frame)
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full aspect-square overflow-hidden" />
  )
} 
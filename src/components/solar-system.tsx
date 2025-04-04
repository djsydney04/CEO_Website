'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function SolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null // Transparent background
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

    // Create sun
    const sunGeometry = new THREE.IcosahedronGeometry(2, 5)
    const sunMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x545454,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x333333,
      emissiveIntensity: 0.8,
      flatShading: true
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    // Enhanced sun glow effect
    const sunGlowGeometry = new THREE.SphereGeometry(2.4, 36, 36)
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    })
    const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial)
    scene.add(sunGlow)

    // Add dynamic sun rays
    const rayCount = 8
    const rayGeometry = new THREE.BoxGeometry(0.1, 4, 0.1)
    const rayMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    })
    
    const rays: THREE.Mesh[] = []
    for (let i = 0; i < rayCount; i++) {
      const ray = new THREE.Mesh(rayGeometry, rayMaterial)
      const angle = (i / rayCount) * Math.PI * 2
      ray.position.x = Math.cos(angle) * 3
      ray.position.z = Math.sin(angle) * 3
      ray.rotation.y = -angle
      rays.push(ray)
      scene.add(ray)
    }

    // Add ambient light with more intensity
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambientLight)
    
    // Enhanced directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Add point light at sun with more intensity and larger range
    const sunLight = new THREE.PointLight(0xffffff, 1.5, 30)
    sunLight.position.set(0, 0, 0)
    scene.add(sunLight)

    // Create planets
    const planets: THREE.Mesh[] = []
    const orbits: THREE.Line[] = []
    // Using more refined shades of gray for better contrast and visual interest
    const planetColors = [0xaaaaaa, 0x888888, 0x666666, 0x444444]
    
    for (let i = 0; i < 4; i++) {
      // Create planet with more detail
      const planetGeometry = new THREE.IcosahedronGeometry(0.5, 4) // Increase detail level
      const planetMaterial = new THREE.MeshStandardMaterial({ 
        color: planetColors[i],
        roughness: 0.6,
        metalness: 0.4,
        flatShading: false
      })
      const planet = new THREE.Mesh(planetGeometry, planetMaterial)
      
      // Create planet atmosphere with more refined look
      if (i % 2 === 0) {
        const atmosphereGeometry = new THREE.SphereGeometry(0.55, 36, 36)
        const atmosphereMaterial = new THREE.MeshBasicMaterial({
          color: 0xcccccc,
          transparent: true,
          opacity: 0.15,
          side: THREE.BackSide
        })
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
        planet.add(atmosphere)
      }
      
      // Create orbit
      const orbitRadius = 3 + (i * 2.5)
      const orbitGeometry = new THREE.BufferGeometry()
      const orbitPoints = []
      for (let j = 0; j <= 256; j++) { // More points for smoother orbit
        const angle = (j / 256) * Math.PI * 2
        orbitPoints.push(new THREE.Vector3(
          Math.cos(angle) * orbitRadius,
          0,
          Math.sin(angle) * orbitRadius
        ))
      }
      orbitGeometry.setFromPoints(orbitPoints)
      const orbitMaterial = new THREE.LineBasicMaterial({ 
        color: 0xe0e0e0, 
        transparent: true, 
        opacity: 0.3,
        linewidth: 1 
      })
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial)
      
      // Create satellite for each planet with better detailing
      if (i > 0) {
        const moonSize = 0.15
        const moonGeometry = new THREE.IcosahedronGeometry(moonSize, 3)
        const moonMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xdddddd,
          roughness: 0.5,
          metalness: 0.3,
          flatShading: false
        })
        const moon = new THREE.Mesh(moonGeometry, moonMaterial)
        const moonOrbitRadius = 1
        moon.position.x = moonOrbitRadius
        planet.add(moon)
        
        // Add ring to last planet with more refinement
        if (i === 3) {
          const ringGeometry = new THREE.RingGeometry(0.7, 1.2, 48)
          const ringMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xbbbbbb, 
            transparent: true, 
            opacity: 0.5,
            side: THREE.DoubleSide
          })
          const ring = new THREE.Mesh(ringGeometry, ringMaterial)
          ring.rotation.x = Math.PI / 2
          planet.add(ring)
        }
      }
      
      scene.add(planet)
      scene.add(orbit)
      planets.push(planet)
      orbits.push(orbit)
    }

    // Add more stars for a denser field
    const starCount = 800 // More stars
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)
    const starColors = new Float32Array(starCount * 3)
    
    const colorOptions = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xeeeeee),
      new THREE.Color(0xdddddd),
      new THREE.Color(0xcccccc)
    ]
    
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
      starSizes[i] = Math.random() * 0.5 + 0.1 // Varied star sizes
      
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      starColors[i * 3] = color.r
      starColors[i * 3 + 1] = color.g
      starColors[i * 3 + 2] = color.b
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3))
    
    // Create texture for stars
    const starSprite = new THREE.TextureLoader().load('data:image/png;base64,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')
    
    const starMaterial = new THREE.PointsMaterial({
      size: 0.8,
      map: starSprite,
      transparent: true,
      alphaTest: 0.5,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    })
    
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Set camera
    camera.position.z = 15
    camera.position.y = 5
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    // Animation variables
    let frame = 0
    const startTime = Date.now()
    
    const animate = () => {
      frame = requestAnimationFrame(animate)
      
      const elapsedTime = (Date.now() - startTime) / 1000
      
      // More dynamic sun rotation and pulsing
      sun.rotation.y += 0.005
      sun.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1
      sun.scale.setScalar(1 + Math.sin(elapsedTime * 0.8) * 0.05)
      
      // Rotate sun rays
      rays.forEach((ray, i) => {
        const angle = (i / rayCount) * Math.PI * 2 + elapsedTime * 0.2
        ray.position.x = Math.cos(angle) * 3
        ray.position.z = Math.sin(angle) * 3
        ray.rotation.y = -angle
        ray.scale.y = 1 + Math.sin(elapsedTime * 2 + i) * 0.2
      })
      
      // Enhanced sun glow animation
      sunGlow.rotation.y -= 0.003
      sunGlow.rotation.z += 0.002
      sunGlow.scale.setScalar(1 + Math.sin(elapsedTime * 0.5) * 0.1)
      
      // Smoother camera movement
      const cameraRadius = 15
      const cameraSpeed = 0.05
      camera.position.x = Math.sin(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.z = Math.cos(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.y = 5 + Math.sin(elapsedTime * 0.2) * 3
      camera.lookAt(0, 0, 0)

      // Enhanced planet animation
      planets.forEach((planet, index) => {
        const orbitRadius = 3 + (index * 2.5)
        const speed = 0.15 / (index + 2)
        const time = elapsedTime * speed
        
        // Orbital movement with vertical oscillation
        planet.position.x = Math.cos(time) * orbitRadius
        planet.position.z = Math.sin(time) * orbitRadius
        planet.position.y = Math.sin(time * 2) * 0.8
        
        // Planet rotation
        planet.rotation.y += 0.01 + index * 0.002
        planet.rotation.x = Math.sin(elapsedTime * 0.2 + index) * 0.1
        
        // Enhanced moon movement
        if (planet.children.length > 0) {
          const moon = planet.children[0] as THREE.Mesh
          if (moon.geometry instanceof THREE.IcosahedronGeometry) {
            const moonSpeed = 0.8
            const moonTime = elapsedTime * moonSpeed
            moon.position.x = Math.cos(moonTime) * 1.2
            moon.position.z = Math.sin(moonTime) * 1.2
            moon.position.y = Math.sin(moonTime * 2) * 0.3
            moon.rotation.y += 0.05
          }
        }
      })

      // Enhanced star twinkling
      const starSizes = starGeometry.attributes.size.array as Float32Array
      for (let i = 0; i < starCount; i++) {
        const twinkle = Math.sin(elapsedTime * 3 + i * 8.24) * 0.5 + 0.5
        starSizes[i] = (Math.random() * 0.3 + 0.2) * twinkle
      }
      starGeometry.attributes.size.needsUpdate = true

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
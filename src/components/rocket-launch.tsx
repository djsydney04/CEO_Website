'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function RocketLaunch() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff) // White background
    scene.fog = new THREE.Fog(0xffffff, 15, 50) // Add fog for depth
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true }) // Enable anti-aliasing for smoother edges
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
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Create rocket body
    const rocketGeometry = new THREE.CylinderGeometry(0.5, 1, 4, 16) // More segments for smoother appearance
    const rocketMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x545454, 
      roughness: 0.7,
      metalness: 0.3,
    }) // Main gray color
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial)
    
    // Create rocket nose
    const noseGeometry = new THREE.ConeGeometry(0.5, 1, 16) // More segments for smoother appearance
    const noseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x757575,
      roughness: 0.5,
      metalness: 0.5,
    }) // Darker gray
    const nose = new THREE.Mesh(noseGeometry, noseMaterial)
    nose.position.y = 2.5
    rocket.add(nose)

    // Add windows to the rocket
    const windowGeometry = new THREE.CircleGeometry(0.15, 16) // More segments for smoother circle
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xeeeeee,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xeeeeee,
      emissiveIntensity: 0.2,
    })
    
    for (let i = 0; i < 3; i++) {
      const window = new THREE.Mesh(windowGeometry, windowMaterial)
      window.position.y = 0.5 * i
      window.position.z = 0.5
      window.rotation.x = Math.PI / 2
      rocket.add(window)
    }

    // Create fins
    const finGeometry = new THREE.BoxGeometry(0.5, 1, 0.1)
    const finMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x9e9e9e,
      roughness: 0.6,
      metalness: 0.4,
    }) // Light gray
    
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial)
      fin.position.y = -1.5
      fin.position.x = Math.cos((i / 3) * Math.PI * 2) * 1
      fin.position.z = Math.sin((i / 3) * Math.PI * 2) * 1
      fin.lookAt(new THREE.Vector3(fin.position.x * 2, -1.5, fin.position.z * 2))
      rocket.add(fin)
    }

    scene.add(rocket)

    // Create a grid for the ground
    const gridSize = 30
    const gridDivisions = 30
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xbdbdbd, 0xe0e0e0)
    gridHelper.position.y = -10
    scene.add(gridHelper)

    // Create particle system for exhaust - use sprite material for better particles
    const particleCount = 300
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 2
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4 - 2
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 2
      particleSizes[i] = Math.random() * 0.5 + 0.1
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1))
    
    // Create a sprite texture for particles
    const particleTexture = new THREE.TextureLoader().load('data:image/png;base64,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')
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
      opacity: 0.8,
      sizeAttenuation: true
    })
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    rocket.add(particleSystem)

    // Add flame light
    const flameLight = new THREE.PointLight(0xdddddd, 2, 6)
    flameLight.position.y = -2
    rocket.add(flameLight)

    // Add clouds - use sphere geometry for smoother clouds
    const cloudCount = 20
    const clouds: THREE.Mesh[] = []
    
    for (let i = 0; i < cloudCount; i++) {
      const cloudSize = 0.5 + Math.random() * 1.5
      const cloudGeometry = new THREE.SphereGeometry(cloudSize, 8, 8)
      const cloudMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf5f5f5, 
        transparent: true, 
        opacity: 0.5 + Math.random() * 0.3,
        roughness: 0.9,
        flatShading: false
      })
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
      
      cloud.position.x = (Math.random() - 0.5) * 20
      cloud.position.y = -5 - Math.random() * 10
      cloud.position.z = (Math.random() - 0.5) * 20
      
      // Add some random rotation to each cloud
      cloud.rotation.x = Math.random() * Math.PI
      cloud.rotation.y = Math.random() * Math.PI
      cloud.rotation.z = Math.random() * Math.PI
      
      scene.add(cloud)
      clouds.push(cloud)
    }

    // Add stars in the background
    const starCount = 150
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)
    
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
      starSizes[i] = Math.random() * 0.3 + 0.1
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))
    
    const starMaterial = new THREE.PointsMaterial({
      color: 0xcccccc,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      size: 0.5,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    camera.position.z = 10
    camera.position.y = 2

    // Animation
    let frame = 0
    const startTime = Date.now()
    const animate = () => {
      frame = requestAnimationFrame(animate)

      const elapsedTime = (Date.now() - startTime) / 1000
      
      // Rocket movement with smooth easing
      const maxHeight = 20
      const duration = 10 // seconds to reach max height
      const t = Math.min(elapsedTime / duration, 1)
      const easeOutCubic = 1 - Math.pow(1 - t, 3)
      rocket.position.y = -5 + (maxHeight * easeOutCubic)
      
      // Add some wobble to the rocket - more natural movement
      rocket.rotation.z = Math.sin(elapsedTime * 2) * 0.05
      
      // Rotate the rocket slowly
      rocket.rotation.y += 0.01
      
      // Update flame light intensity based on rocket thrust
      const thrustVariation = Math.sin(elapsedTime * 15) * 0.5 + 1.5
      flameLight.intensity = thrustVariation
      
      // Camera follows the rocket with some lag
      const cameraLag = 0.2
      const targetCameraY = rocket.position.y * 0.8 + 2
      camera.position.y += (targetCameraY - camera.position.y) * cameraLag
      
      // Tilt the camera view as rocket ascends
      if (rocket.position.y > 0) {
        const tiltFactor = Math.min(rocket.position.y * 0.05, 0.5)
        const targetCameraZ = 10 - tiltFactor * 5
        camera.position.z += (targetCameraZ - camera.position.z) * cameraLag
        camera.position.y += tiltFactor * 5 * cameraLag
        camera.lookAt(rocket.position)
      }
      
      // Update clouds
      clouds.forEach(cloud => {
        cloud.position.y -= 0.05 // Clouds move down as rocket ascends
        cloud.rotation.y += 0.005
        
        // Reset clouds that go too far down
        if (cloud.position.y < -30) {
          cloud.position.y = 10
          cloud.position.x = (Math.random() - 0.5) * 20
          cloud.position.z = (Math.random() - 0.5) * 20
        }
      })
      
      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array
      const sizes = particleGeometry.attributes.size.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.1
        positions[i * 3 + 1] -= Math.random() * 0.3
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.1
        
        // Particles get smaller as they fall
        sizes[i] *= 0.96
        
        // Reset particles that fall too far or get too small
        if (positions[i * 3 + 1] < -5 || sizes[i] < 0.1) {
          positions[i * 3] = (Math.random() - 0.5) * 2
          positions[i * 3 + 1] = -2
          positions[i * 3 + 2] = (Math.random() - 0.5) * 2
          sizes[i] = Math.random() * 0.5 + 0.1
        }
      }
      particleGeometry.attributes.position.needsUpdate = true
      particleGeometry.attributes.size.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(frame)
      renderer.dispose()
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full aspect-square bg-white rounded-2xl overflow-hidden shadow-lg" />
  )
} 
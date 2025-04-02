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

    // Create rocket body
    const rocketGeometry = new THREE.CylinderGeometry(0.5, 0.8, 4.5, 24) // Better proportions, more detail
    const rocketMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x545454, 
      roughness: 0.3,
      metalness: 0.9,
    }) // Main gray color with more shine
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial)
    
    // Create rocket nose
    const noseGeometry = new THREE.ConeGeometry(0.5, 1.2, 24) // More segments, better proportions
    const noseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x666666,
      roughness: 0.2,
      metalness: 0.8,
    }) // Darker gray that matches solar system
    const nose = new THREE.Mesh(noseGeometry, noseMaterial)
    nose.position.y = 2.8 // Better position
    rocket.add(nose)

    // Add windows to the rocket
    const windowGeometry = new THREE.CircleGeometry(0.12, 24) // More segments for smoother circle
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xeeeeee,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0xcccccc,
      emissiveIntensity: 0.7,
    })
    
    // Create a row of windows
    for (let i = 0; i < 4; i++) {
      const window = new THREE.Mesh(windowGeometry, windowMaterial)
      window.position.y = 0.2 + (i * 0.6)
      window.position.z = 0.48
      window.rotation.x = Math.PI / 2
      rocket.add(window)
    }

    // Create better fins
    const finShape = new THREE.Shape()
    finShape.moveTo(0, 0)
    finShape.lineTo(1.2, -0.8)
    finShape.lineTo(0.8, -1.5)
    finShape.lineTo(0, -1.2)
    finShape.lineTo(0, 0)

    const finExtrudeSettings = {
      steps: 1,
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3
    }

    const finGeometry = new THREE.ExtrudeGeometry(finShape, finExtrudeSettings)
    const finMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x757575,
      roughness: 0.4,
      metalness: 0.7,
    }) 
    
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial)
      fin.position.y = -1.8
      fin.rotation.y = (i / 3) * Math.PI * 2
      rocket.add(fin)
    }
    
    // Add stripes to rocket
    const stripeGeometry = new THREE.CylinderGeometry(0.51, 0.51, 0.2, 24, 1, true)
    const stripeMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.5,
      metalness: 0.5,
    })
    
    for (let i = 0; i < 5; i++) {
      const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial)
      stripe.position.y = -1.5 + (i * 0.8)
      rocket.add(stripe)
    }

    // Add a bottom engine section
    const engineBaseGeometry = new THREE.CylinderGeometry(0.7, 0.9, 0.5, 24)
    const engineBaseMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.7,
      metalness: 0.3,
    })
    const engineBase = new THREE.Mesh(engineBaseGeometry, engineBaseMaterial)
    engineBase.position.y = -2.4
    rocket.add(engineBase)

    // Add engine nozzles
    const nozzleGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.5, 24)
    const nozzleMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.8,
      metalness: 0.4,
    })
    
    for (let i = 0; i < 3; i++) {
      const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial)
      const angle = (i / 3) * Math.PI * 2
      nozzle.position.x = Math.cos(angle) * 0.4
      nozzle.position.z = Math.sin(angle) * 0.4
      nozzle.position.y = -2.8
      rocket.add(nozzle)
    }

    // Add an antenna on top
    const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8)
    const antennaMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      roughness: 0.4,
      metalness: 0.6,
    })
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial)
    antenna.position.y = 3.4
    rocket.add(antenna)

    // Add antenna top
    const antennaTopGeometry = new THREE.SphereGeometry(0.05, 8, 8)
    const antennaTopMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xaaaaaa,
      emissiveIntensity: 0.3,
    })
    const antennaTop = new THREE.Mesh(antennaTopGeometry, antennaTopMaterial)
    antennaTop.position.y = 3.7
    rocket.add(antennaTop)

    scene.add(rocket)

    // Create a grid for the ground
    const gridSize = 40
    const gridDivisions = 40
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xbdbdbd, 0xe0e0e0)
    gridHelper.position.y = -10
    gridHelper.material.transparent = true
    gridHelper.material.opacity = 0.3
    scene.add(gridHelper)

    // Create launch pad
    const padGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 16)
    const padMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.7,
      metalness: 0.3
    })
    const launchPad = new THREE.Mesh(padGeometry, padMaterial)
    launchPad.position.y = -7.5
    scene.add(launchPad)
    
    // Create launch tower
    const towerGeometry = new THREE.BoxGeometry(0.3, 8, 0.3)
    const towerMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      roughness: 0.6,
      metalness: 0.4
    })
    const tower = new THREE.Mesh(towerGeometry, towerMaterial)
    tower.position.set(2, -4, 0)
    scene.add(tower)
    
    // Add cross beams to tower
    for (let i = 0; i < 3; i++) {
      const beamGeometry = new THREE.BoxGeometry(2, 0.2, 0.2)
      const beam = new THREE.Mesh(beamGeometry, towerMaterial)
      beam.position.set(1, -6 + i * 2, 0)
      scene.add(beam)
    }

    // Create particle system for exhaust - use sprite material for better particles
    const particleCount = 600 // More particles for better effect
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSizes = new Float32Array(particleCount)
    const particleColors = new Float32Array(particleCount * 3)
    
    const exhaustColors = [
      new THREE.Color(0xeeeeee), // Light gray
      new THREE.Color(0xcccccc), // Medium light gray
      new THREE.Color(0xaaaaaa), // Medium gray
      new THREE.Color(0x888888)  // Darker gray
    ]
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 2
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4 - 2
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 2
      particleSizes[i] = Math.random() * 0.5 + 0.1
      
      const color = exhaustColors[Math.floor(Math.random() * exhaustColors.length)]
      particleColors[i * 3] = color.r
      particleColors[i * 3 + 1] = color.g
      particleColors[i * 3 + 2] = color.b
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
    
    // Create a sprite texture for particles
    const particleTexture = new THREE.TextureLoader().load('data:image/png;base64,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')
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      map: particleTexture,
      transparent: true,
      alphaTest: 0.1,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    })
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    rocket.add(particleSystem)

    // Add flame light with more intensity
    const flameLight = new THREE.PointLight(0xeeeeee, 4, 10)
    flameLight.position.y = -3
    rocket.add(flameLight)

    // Add clouds - use sphere geometry for smoother clouds
    const cloudCount = 25
    const clouds: THREE.Mesh[] = []
    
    for (let i = 0; i < cloudCount; i++) {
      const cloudSize = 0.5 + Math.random() * 2
      const cloudDetail = Math.floor(Math.random() * 3) + 3 // Random detail level
      const cloudGeometry = new THREE.SphereGeometry(cloudSize, cloudDetail, cloudDetail)
      const cloudMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf5f5f5, 
        transparent: true, 
        opacity: 0.2 + Math.random() * 0.3,
        roughness: 0.9,
        flatShading: Math.random() > 0.5 // Mix of smooth and flat clouds
      })
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
      
      cloud.position.x = (Math.random() - 0.5) * 30
      cloud.position.y = -5 - Math.random() * 15
      cloud.position.z = (Math.random() - 0.5) * 30
      
      // Add some random rotation to each cloud
      cloud.rotation.x = Math.random() * Math.PI
      cloud.rotation.y = Math.random() * Math.PI
      cloud.rotation.z = Math.random() * Math.PI
      
      // Add some random scale
      const scale = 0.8 + Math.random() * 1.5
      cloud.scale.set(scale, scale * 0.7, scale)
      
      scene.add(cloud)
      clouds.push(cloud)
    }

    // Add stars in the background
    const starCount = 300
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)
    const starColors = new Float32Array(starCount * 3)
    
    const starColorOptions = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xcccccc),
      new THREE.Color(0xeeeeee),
      new THREE.Color(0xdddddd)
    ]
    
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 150
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 150
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 150
      starSizes[i] = Math.random() * 0.3 + 0.1
      
      const color = starColorOptions[Math.floor(Math.random() * starColorOptions.length)]
      starColors[i * 3] = color.r
      starColors[i * 3 + 1] = color.g
      starColors[i * 3 + 2] = color.b
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3))
    
    const starMaterial = new THREE.PointsMaterial({
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      size: 0.5,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    })
    
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Initial position
    rocket.position.set(0, -7, 0)
    camera.position.set(10, -2, 10)
    camera.lookAt(0, 0, 0)

    // Animation
    let frame = 0
    const startTime = Date.now()
    const animate = () => {
      frame = requestAnimationFrame(animate)

      const elapsedTime = (Date.now() - startTime) / 1000
      
      // Rocket movement with smooth easing
      const maxHeight = 30
      const duration = 12 // seconds to reach max height
      const t = Math.min(elapsedTime / duration, 1)
      const easeOutCubic = 1 - Math.pow(1 - t, 3)
      // Start from launch pad at -7 and go up
      rocket.position.y = -7 + (maxHeight * easeOutCubic)
      
      // Add some wobble to the rocket - more natural movement
      rocket.rotation.z = Math.sin(elapsedTime * 2) * 0.03 // Less wobble
      
      // Rotate the rocket slowly
      rocket.rotation.y += 0.01
      
      // Update flame light intensity based on rocket thrust with more variation
      const thrustVariation = Math.sin(elapsedTime * 20) * 0.7 + 3
      flameLight.intensity = thrustVariation
      
      // Camera follows the rocket with some lag
      const cameraLag = 0.05
      const targetCameraY = rocket.position.y * 0.7
      camera.position.y += (targetCameraY - camera.position.y) * cameraLag
      
      // Tilt the camera view as rocket ascends
      if (rocket.position.y > 0) {
        const tiltFactor = Math.min(rocket.position.y * 0.03, 0.6)
        const targetCameraZ = 10 - tiltFactor * 5
        camera.position.z += (targetCameraZ - camera.position.z) * cameraLag
        camera.position.x += (8 - camera.position.x) * cameraLag * 0.5
        camera.lookAt(rocket.position)
      } else {
        // Starting camera angle
        camera.lookAt(0, 0, 0)
      }
      
      // Update clouds
      clouds.forEach(cloud => {
        cloud.position.y -= 0.08 // Clouds move down as rocket ascends
        cloud.rotation.y += 0.002
        
        // Reset clouds that go too far down
        if (cloud.position.y < -30) {
          cloud.position.y = 15
          cloud.position.x = (Math.random() - 0.5) * 30
          cloud.position.z = (Math.random() - 0.5) * 30
        }
      })
      
      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array
      const sizes = particleGeometry.attributes.size.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.1
        positions[i * 3 + 1] -= Math.random() * 0.5
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.1
        
        // Particles get smaller as they fall
        sizes[i] *= 0.95
        
        // Reset particles that fall too far or get too small
        if (positions[i * 3 + 1] < -5 || sizes[i] < 0.1) {
          positions[i * 3] = (Math.random() - 0.5) * 2
          positions[i * 3 + 1] = -2
          positions[i * 3 + 2] = (Math.random() - 0.5) * 2
          sizes[i] = Math.random() * 0.7 + 0.3
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
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full aspect-square overflow-hidden" />
  )
} 
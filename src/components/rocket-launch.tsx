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
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: false }) // Pixelated effect
    renderer.setPixelRatio(1) // Pixelated effect
    
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

    // Create rocket body
    const rocketGeometry = new THREE.CylinderGeometry(0.5, 1, 4, 8) // Low poly for pixelated look
    const rocketMaterial = new THREE.MeshBasicMaterial({ color: 0x545454 }) // Main gray color
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial)
    
    // Create rocket nose
    const noseGeometry = new THREE.ConeGeometry(0.5, 1, 8) // Low poly nose
    const noseMaterial = new THREE.MeshBasicMaterial({ color: 0x757575 }) // Darker gray
    const nose = new THREE.Mesh(noseGeometry, noseMaterial)
    nose.position.y = 2.5
    rocket.add(nose)

    // Add windows to the rocket
    const windowGeometry = new THREE.CircleGeometry(0.15, 8)
    const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xeeeeee })
    
    for (let i = 0; i < 3; i++) {
      const window = new THREE.Mesh(windowGeometry, windowMaterial)
      window.position.y = 0.5 * i
      window.position.z = 0.5
      window.rotation.x = Math.PI / 2
      rocket.add(window)
    }

    // Create fins
    const finGeometry = new THREE.BoxGeometry(0.5, 1, 0.1)
    const finMaterial = new THREE.MeshBasicMaterial({ color: 0x9e9e9e }) // Light gray
    
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
    const gridSize = 20
    const gridDivisions = 20
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xbdbdbd, 0xe0e0e0)
    gridHelper.position.y = -10
    scene.add(gridHelper)

    // Create particle system for exhaust
    const particleCount = 200
    const particles = new Float32Array(particleCount * 3)
    const particleGeometry = new THREE.BufferGeometry()
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xa0a0a0,
      size: 0.2,
      transparent: true,
      opacity: 0.8
    })

    for (let i = 0; i < particleCount; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 2
      particles[i * 3 + 1] = (Math.random() - 0.5) * 4 - 2
      particles[i * 3 + 2] = (Math.random() - 0.5) * 2
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3))
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    rocket.add(particleSystem)

    // Add clouds
    const cloudCount = 15
    const clouds: THREE.Mesh[] = []
    
    for (let i = 0; i < cloudCount; i++) {
      const cloudSize = 0.5 + Math.random() * 1.5
      const cloudGeometry = new THREE.IcosahedronGeometry(cloudSize, 0)
      const cloudMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xf5f5f5, 
        transparent: true, 
        opacity: 0.5 + Math.random() * 0.3 
      })
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial)
      
      cloud.position.x = (Math.random() - 0.5) * 20
      cloud.position.y = -5 - Math.random() * 10
      cloud.position.z = (Math.random() - 0.5) * 20
      
      scene.add(cloud)
      clouds.push(cloud)
    }

    // Add stars in the background
    const starCount = 100
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    
    const starMaterial = new THREE.PointsMaterial({
      color: 0xcccccc,
      size: 0.3,
      transparent: true,
      opacity: 0.8
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
      
      // Rocket movement
      rocket.position.y = Math.min(elapsedTime * 2, 15) - 5 // Move up with speed limit
      
      // Add some wobble to the rocket
      rocket.rotation.z = Math.sin(elapsedTime * 2) * 0.05
      
      // Rotate the rocket slowly
      rocket.rotation.y += 0.01
      
      // Camera follows the rocket with some lag
      camera.position.y = rocket.position.y * 0.8 + 2
      
      // Tilt the camera view as rocket ascends
      if (rocket.position.y > 0) {
        const tiltFactor = Math.min(rocket.position.y * 0.05, 0.5)
        camera.position.z = 10 - tiltFactor * 5
        camera.position.y += tiltFactor * 5
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
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.1
        positions[i * 3 + 1] -= Math.random() * 0.3
        positions[i * 3 + 2] += (Math.random() - 0.5) * 0.1

        // Reset particles that fall too far
        if (positions[i * 3 + 1] < -5) {
          positions[i * 3] = (Math.random() - 0.5) * 2
          positions[i * 3 + 1] = -2
          positions[i * 3 + 2] = (Math.random() - 0.5) * 2
        }
      }
      particleGeometry.attributes.position.needsUpdate = true

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
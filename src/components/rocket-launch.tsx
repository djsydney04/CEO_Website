'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function RocketLaunch() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
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
    const rocketGeometry = new THREE.CylinderGeometry(0.5, 1, 4, 6) // Low poly for pixelated look
    const rocketMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial)
    
    // Create rocket nose
    const noseGeometry = new THREE.ConeGeometry(0.5, 1, 6) // Low poly nose
    const noseMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const nose = new THREE.Mesh(noseGeometry, noseMaterial)
    nose.position.y = 2.5
    rocket.add(nose)

    // Create fins
    const finGeometry = new THREE.BoxGeometry(0.5, 1, 0.1)
    const finMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 })
    
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial)
      fin.position.y = -1.5
      fin.position.x = Math.cos((i / 3) * Math.PI * 2) * 1
      fin.position.z = Math.sin((i / 3) * Math.PI * 2) * 1
      fin.lookAt(new THREE.Vector3(fin.position.x * 2, -1.5, fin.position.z * 2))
      rocket.add(fin)
    }

    scene.add(rocket)

    // Create particle system for exhaust
    const particleCount = 100
    const particles = new Float32Array(particleCount * 3)
    const particleGeometry = new THREE.BufferGeometry()
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xff5500,
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
      rocket.rotation.y += 0.02
      
      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += (Math.random() - 0.5) * 0.1
        positions[i * 3 + 1] -= Math.random() * 0.2
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
    <div ref={containerRef} className="w-full aspect-square bg-black rounded-2xl overflow-hidden" />
  )
} 
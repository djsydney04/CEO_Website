'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function SolarSystem() {
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

    // Create sun
    const sunGeometry = new THREE.IcosahedronGeometry(2, 1) // Low poly for pixelated look
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    // Create planets
    const planets: THREE.Mesh[] = []
    const orbits: THREE.Line[] = []
    const planetColors = [0x3498db, 0xe74c3c, 0x2ecc71, 0x9b59b6]
    
    for (let i = 0; i < 4; i++) {
      // Create planet
      const planetGeometry = new THREE.IcosahedronGeometry(0.5, 0) // Even more pixelated
      const planetMaterial = new THREE.MeshBasicMaterial({ color: planetColors[i] })
      const planet = new THREE.Mesh(planetGeometry, planetMaterial)
      
      // Create orbit
      const orbitRadius = 3 + (i * 2)
      const orbitGeometry = new THREE.BufferGeometry()
      const orbitPoints = []
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2
        orbitPoints.push(new THREE.Vector3(
          Math.cos(angle) * orbitRadius,
          0,
          Math.sin(angle) * orbitRadius
        ))
      }
      orbitGeometry.setFromPoints(orbitPoints)
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.3 })
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial)
      
      scene.add(planet)
      scene.add(orbit)
      planets.push(planet)
      orbits.push(orbit)
    }

    camera.position.z = 15

    // Animation
    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)

      // Rotate sun
      sun.rotation.y += 0.005

      // Rotate and orbit planets
      planets.forEach((planet, index) => {
        const orbitRadius = 3 + (index * 2)
        const speed = 0.001 / (index * 0.5 + 1)
        const time = Date.now() * speed
        
        planet.position.x = Math.cos(time) * orbitRadius
        planet.position.z = Math.sin(time) * orbitRadius
        planet.rotation.y += 0.02
      })

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
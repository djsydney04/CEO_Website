'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function SolarSystem() {
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

    // Create sun
    const sunGeometry = new THREE.IcosahedronGeometry(2, 1) // Low poly for pixelated look
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0x545454 }) // Gray color
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    // Create planets
    const planets: THREE.Mesh[] = []
    const orbits: THREE.Line[] = []
    // Using different shades of gray
    const planetColors = [0x9e9e9e, 0x757575, 0x616161, 0x424242]
    
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
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xe0e0e0, transparent: true, opacity: 0.5 })
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial)
      
      // Create satellite for each planet
      if (i > 0) {
        const moonSize = 0.15
        const moonGeometry = new THREE.IcosahedronGeometry(moonSize, 0)
        const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xf5f5f5 })
        const moon = new THREE.Mesh(moonGeometry, moonMaterial)
        const moonOrbitRadius = 1
        moon.position.x = moonOrbitRadius
        planet.add(moon)
      }
      
      scene.add(planet)
      scene.add(orbit)
      planets.push(planet)
      orbits.push(orbit)
    }

    // Add some stars
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
      color: 0xbdbdbd,
      size: 0.3,
      transparent: true,
      opacity: 0.8
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
      
      // Rotate sun
      sun.rotation.y += 0.005
      sun.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1
      
      // Move camera in a gentle orbit
      const cameraRadius = 15
      const cameraSpeed = 0.1
      camera.position.x = Math.sin(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.z = Math.cos(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.y = 5 + Math.sin(elapsedTime * 0.2) * 2
      camera.lookAt(0, 0, 0)

      // Rotate and orbit planets
      planets.forEach((planet, index) => {
        const orbitRadius = 3 + (index * 2)
        const speed = 0.002 / (index * 0.3 + 1)
        const time = elapsedTime * speed * 10
        
        // Orbital movement
        planet.position.x = Math.cos(time) * orbitRadius
        planet.position.z = Math.sin(time) * orbitRadius
        
        // Add some vertical movement
        planet.position.y = Math.sin(time * 2) * 0.5
        
        // Planet rotation
        planet.rotation.y += 0.02
        
        // If the planet has a moon, rotate it
        if (planet.children.length > 0) {
          const moon = planet.children[0] as THREE.Mesh
          const moonSpeed = 0.05
          const moonTime = elapsedTime * moonSpeed * 5
          
          moon.position.x = Math.cos(moonTime) * 1
          moon.position.z = Math.sin(moonTime) * 1
        }
      })

      // Make stars twinkle
      const starPositions = starGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < starCount; i++) {
        starPositions[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.01
      }
      starGeometry.attributes.position.needsUpdate = true

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
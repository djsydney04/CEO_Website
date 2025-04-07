'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Create a dense binary pattern
function generateBinaryPattern(width: number, height: number) {
  const pattern = []
  for (let i = 0; i < height; i++) {
    let row = ''
    for (let j = 0; j < width; j++) {
      row += Math.random() > 0.5 ? '1' : '0'
    }
    pattern.push(row)
  }
  return pattern
}

// Generate code-like patterns
function generateCodePattern() {
  const patterns = [
    Array(4).fill(0).map(() => ' '.repeat(Math.floor(Math.random() * 8)) + 'function(' + 'x'.repeat(Math.floor(Math.random() * 3)) + ') {'),
    Array(4).fill(0).map(() => ' '.repeat(Math.floor(Math.random() * 12)) + 'const ' + 'x'.repeat(Math.floor(Math.random() * 5)) + ' = ' + Math.floor(Math.random() * 100) + ';'),
    Array(4).fill(0).map(() => ' '.repeat(Math.floor(Math.random() * 12)) + 'return ' + 'x'.repeat(Math.floor(Math.random() * 4)) + ';'),
    Array(4).fill(0).map(() => ' '.repeat(Math.floor(Math.random() * 8)) + '}'),
    Array(4).fill(0).map(() => ' '.repeat(Math.floor(Math.random() * 12)) + 'if (' + 'x'.repeat(Math.floor(Math.random() * 3)) + ' > ' + Math.floor(Math.random() * 10) + ') {'),
  ]
  return patterns.flat()
}

export default function CodeCube() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#ffffff')
    
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'low-power' // Optimize for mobile
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Cap pixel ratio for performance
    
    // Create binary textures with transparent background and gray text
    const materials = Array(6).fill(null).map(() => {
      const canvas = document.createElement('canvas')
      const isMobile = window.innerWidth < 768
      canvas.width = isMobile ? 1024 : 2048 // Reduce texture size on mobile
      canvas.height = isMobile ? 1024 : 2048
      const ctx = canvas.getContext('2d')!
      
      // Make background fully transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Generate binary pattern - Reduce grid size on mobile
      const pattern = generateBinaryPattern(isMobile ? 16 : 32, isMobile ? 16 : 32)
      const cellSize = canvas.width / (isMobile ? 16 : 32)
      
      // Adjust font size for mobile
      ctx.font = `bold ${Math.floor(cellSize * 0.7)}px "Courier New", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      pattern.forEach((row, i) => {
        for (let j = 0; j < row.length; j++) {
          const x = (j * cellSize) + (cellSize / 2)
          const y = (i * cellSize) + (cellSize / 2)
          ctx.fillStyle = '#545454'
          ctx.fillText(row[j], x, y)
        }
      })
      
      const texture = new THREE.CanvasTexture(canvas)
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy()) // Limit anisotropy on mobile
      texture.needsUpdate = true

      return new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
      })
    })

    // Main cube
    const geometry = new THREE.BoxGeometry(3, 3, 3)
    const cube = new THREE.Mesh(geometry, materials)
    scene.add(cube)

    // Create particles - Reduce count on mobile
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 75 : 150
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleVelocities = new Float32Array(particleCount * 3)
    const particleLifetimes = new Float32Array(particleCount)

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      resetParticle(i)
    }

    function resetParticle(index: number) {
      // Random position on cube surface
      const angle = Math.random() * Math.PI * 2
      const u = Math.random() * 2 - 1
      const radius = 1.5 // Half cube size
      
      particlePositions[index * 3] = Math.cos(angle) * Math.sqrt(1 - u * u) * radius
      particlePositions[index * 3 + 1] = Math.sin(angle) * Math.sqrt(1 - u * u) * radius
      particlePositions[index * 3 + 2] = u * radius

      // Velocity away from cube - Slower on mobile
      const speed = (0.01 + Math.random() * 0.02) * (isMobile ? 0.5 : 1)
      particleVelocities[index * 3] = particlePositions[index * 3] * speed
      particleVelocities[index * 3 + 1] = particlePositions[index * 3 + 1] * speed
      particleVelocities[index * 3 + 2] = particlePositions[index * 3 + 2] * speed

      // Random lifetime
      particleLifetimes[index] = Math.random()
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x545454,
      size: isMobile ? 0.02 : 0.03,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Lights - simple lighting for transparent cube
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xffffff, 0.6)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 0.4)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Additional light to ensure all sides are visible
    const pointLight3 = new THREE.PointLight(0xffffff, 0.5)
    pointLight3.position.set(0, 10, -10)
    scene.add(pointLight3)

    // Initial setup
    const container = containerRef.current
    const { width } = container.getBoundingClientRect()
    const height = width // Make it square
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // Animation
    let time = 0
    let lastTime = 0
    let animationFrameId: number
    function animate(currentTime: number) {
      // Limit frame rate on mobile
      if (isMobile && currentTime - lastTime < 32) { // ~30fps on mobile
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime
      
      time += isMobile ? 0.005 : 0.01 // Slower rotation on mobile
      cube.rotation.x += isMobile ? 0.001 : 0.002
      cube.rotation.y += isMobile ? 0.001 : 0.002
      
      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        particleLifetimes[i] += isMobile ? 0.005 : 0.01
        if (particleLifetimes[i] > 1) {
          resetParticle(i)
        } else {
          positions[i * 3] += particleVelocities[i * 3]
          positions[i * 3 + 1] += particleVelocities[i * 3 + 1]
          positions[i * 3 + 2] += particleVelocities[i * 3 + 2]
        }
      }
      particleGeometry.attributes.position.needsUpdate = true
      particles.rotation.x = cube.rotation.x
      particles.rotation.y = cube.rotation.y
      
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate(0)

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return
      const { width } = containerRef.current.getBoundingClientRect()
      const height = width // Keep it square
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      materials.forEach(material => {
        material.map?.dispose()
        material.dispose()
      })
      geometry.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="w-full aspect-square bg-white"
    />
  )
} 
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

const CODE_SNIPPETS = [
  `function map<T, U>(
  array: T[],
  fn: (item: T) => U
): U[] {
  return array
    .reduce((acc, item) => 
      [...acc, fn(item)], 
      [] as U[])
}`,
  `interface User {
  id: string
  name: string
  email: string
  role: Role
}`,
  `export function sum(
  ...numbers: number[]
): number {
  return numbers
    .reduce((a, b) => 
      a + b, 0)
}`,
  `type Role = 
  | 'admin'
  | 'user'
  | 'guest'`,
  `async function fetch<T>(
  url: string
): Promise<T> {
  const res = await 
    fetch(url)
  return res.json()
}`,
  `const compose = <T,>(
  ...fns: ((x: T) => T)[]
) => (x: T): T =>
  fns.reduceRight(
    (y, f) => f(y), 
    x
  )`
]

export default function CodeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    globe: THREE.Mesh
    cleanup: () => void
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#ffffff')
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })

    // Create code textures
    const materials = CODE_SNIPPETS.map(code => {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')!
      
      // Background
      ctx.fillStyle = '#1a1a1a'
      ctx.fillRect(0, 0, 512, 512)
      
      // Text
      ctx.font = '20px monospace'
      ctx.fillStyle = '#e5e5e5'
      
      // Split code into lines and render
      const lines = code.split('\n')
      lines.forEach((line, i) => {
        ctx.fillText(line, 20, 40 + i * 24)
      })
      
      return new THREE.MeshPhysicalMaterial({
        map: new THREE.CanvasTexture(canvas),
        transparent: true,
        opacity: 0.95,
        transmission: 0.1,
        thickness: 0.5,
        roughness: 0.1,
        metalness: 0.9,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        emissive: new THREE.Color('#545454'),
        emissiveIntensity: 0.2
      })
    })

    // Create globe geometry
    const radius = 2
    const segments = 64
    const geometry = new THREE.SphereGeometry(radius, segments, segments)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a1a,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      opacity: 0.95,
      transparent: true
    })
    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    // Create particles
    const particleCount = 200
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleVelocities = new Float32Array(particleCount * 3)
    const particleLifetimes = new Float32Array(particleCount)

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      resetParticle(i)
    }

    function resetParticle(index: number) {
      // Random position on sphere surface
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      const r = radius + Math.random() * 0.2
      
      particlePositions[index * 3] = r * Math.sin(theta) * Math.cos(phi)
      particlePositions[index * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      particlePositions[index * 3 + 2] = r * Math.cos(theta)

      // Velocity away from sphere
      const speed = 0.02 + Math.random() * 0.03
      particleVelocities[index * 3] = particlePositions[index * 3] * speed
      particleVelocities[index * 3 + 1] = particlePositions[index * 3 + 1] * speed
      particleVelocities[index * 3 + 2] = particlePositions[index * 3 + 2] * speed

      // Random lifetime
      particleLifetimes[index] = Math.random()
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x545454,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Add holographic grid effect
    const gridGeometry = new THREE.SphereGeometry(radius + 0.1, segments, segments)
    const gridMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x545454,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.1,
      wireframe: true
    })
    const grid = new THREE.Mesh(gridGeometry, gridMaterial)
    scene.add(grid)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x545454, 1)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x545454, 0.8)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Camera position
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    // Initial setup
    const container = containerRef.current
    const { width } = container.getBoundingClientRect()
    const height = width // Keep it square
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // Animation
    let animationFrameId: number
    const clock = new THREE.Clock()

    function animate() {
      const delta = clock.getDelta()

      // Rotate globe
      globe.rotation.y += 0.1 * delta
      grid.rotation.y += 0.15 * delta

      // Update particles
      const positions = particleGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        particleLifetimes[i] -= delta * 0.5
        
        if (particleLifetimes[i] <= 0) {
          resetParticle(i)
        } else {
          positions[i * 3] += particleVelocities[i * 3] * delta
          positions[i * 3 + 1] += particleVelocities[i * 3 + 1] * delta
          positions[i * 3 + 2] += particleVelocities[i * 3 + 2] * delta
        }
      }
      particleGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

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
      gridGeometry.dispose()
      gridMaterial.dispose()
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
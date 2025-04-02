'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

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

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    cube: THREE.Mesh
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
      
      return new THREE.MeshStandardMaterial({
        map: new THREE.CanvasTexture(canvas)
      })
    })

    // Cube setup
    const geometry = new THREE.BoxGeometry(3, 3, 3)
    const cube = new THREE.Mesh(geometry, materials)
    scene.add(cube)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(ambientLight)
    scene.add(pointLight)

    // Camera position
    camera.position.set(5, 5, 5)
    camera.lookAt(0, 0, 0)

    // Initial setup
    const container = containerRef.current
    const { width } = container.getBoundingClientRect()
    const height = 600
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // Animation
    let animationFrameId: number
    function animate() {
      cube.rotation.x += 0.005
      cube.rotation.y += 0.005
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    const cleanup = () => {
      cancelAnimationFrame(animationFrameId)
      materials.forEach(material => {
        material.map?.dispose()
        material.dispose()
      })
      geometry.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }

    sceneRef.current = { scene, camera, renderer, cube, cleanup }

    // Handle resize
    function handleResize() {
      if (!containerRef.current || !sceneRef.current) return
      const { width } = containerRef.current.getBoundingClientRect()
      const height = 600
      sceneRef.current.camera.aspect = width / height
      sceneRef.current.camera.updateProjectionMatrix()
      sceneRef.current.renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cleanup()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-[600px] w-full bg-white"
    />
  )
} 
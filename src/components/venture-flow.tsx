'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function VentureFlow() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null // Transparent background
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    
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

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Create central globe
    const globeRadius = 2.5
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64)
    const globeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x191919,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      emissive: 0x111111,
      emissiveIntensity: 0.2
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Create globe texture with grid lines
    const gridCanvas = document.createElement('canvas')
    gridCanvas.width = 1024
    gridCanvas.height = 512
    const gridCtx = gridCanvas.getContext('2d')
    if (gridCtx) {
      gridCtx.fillStyle = 'rgba(0, 0, 0, 0)'
      gridCtx.fillRect(0, 0, 1024, 512)
      
      // Draw grid lines
      gridCtx.strokeStyle = 'rgba(84, 84, 84, 0.4)'
      gridCtx.lineWidth = 1
      
      // Longitudinal lines
      for (let i = 0; i <= 36; i++) {
        const x = i * (1024 / 36)
        gridCtx.beginPath()
        gridCtx.moveTo(x, 0)
        gridCtx.lineTo(x, 512)
        gridCtx.stroke()
      }
      
      // Latitudinal lines
      for (let i = 0; i <= 18; i++) {
        const y = i * (512 / 18)
        gridCtx.beginPath()
        gridCtx.moveTo(0, y)
        gridCtx.lineTo(1024, y)
        gridCtx.stroke()
      }
    }
    
    const gridTexture = new THREE.CanvasTexture(gridCanvas)
    const gridMaterial = new THREE.MeshStandardMaterial({
      map: gridTexture,
      transparent: true,
      opacity: 0.4
    })
    const gridSphere = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius * 1.01, 64, 64),
      gridMaterial
    )
    globe.add(gridSphere)

    // Add glow effect
    const glowGeometry = new THREE.SphereGeometry(globeRadius * 1.15, 32, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x545454,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    scene.add(glow)

    // Add money symbols orbiting around globe
    const symbolCount = 5 // Dollar, Euro, Yen, Pound, Bitcoin
    const symbolGeometries = [
      createDollarGeometry(),
      createEuroGeometry(),
      createYenGeometry(),
      createPoundGeometry(),
      createBitcoinGeometry()
    ]
    
    const moneyOrbits: {
      symbol: THREE.Mesh;
      orbit: THREE.Line;
      speed: number;
      angle: number;
      radius: number;
      particles: THREE.Points;
    }[] = []
    
    for (let i = 0; i < symbolCount; i++) {
      // Create money symbol
      const symbolGeometry = symbolGeometries[i % symbolGeometries.length]
      const symbolMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x545454,
        emissive: 0x333333,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.9,
        clearcoat: 1
      })
      
      const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial)
      symbol.scale.set(0.4, 0.4, 0.05)
      
      // Create orbit path
      const orbitRadius = globeRadius * (1.5 + i * 0.4)
      const orbitPoints = []
      const segments = 64
      
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2
        orbitPoints.push(new THREE.Vector3(
          Math.cos(theta) * orbitRadius,
          0,
          Math.sin(theta) * orbitRadius
        ))
      }
      
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints)
      const orbitMaterial = new THREE.LineBasicMaterial({
        color: 0x545454,
        transparent: true,
        opacity: 0.3
      })
      
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial)
      
      // Tilt each orbit differently
      orbit.rotation.x = Math.PI / 4 + (i * Math.PI / 12)
      orbit.rotation.z = i * Math.PI / 6
      scene.add(orbit)
      
      // Initial position on orbit
      const angle = Math.random() * Math.PI * 2
      const x = Math.cos(angle) * orbitRadius
      const z = Math.sin(angle) * orbitRadius
      
      symbol.position.set(x, 0, z)
      scene.add(symbol)
      
      // Apply orbit rotation to get correct 3D position
      symbol.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), orbit.rotation.x)
      symbol.position.applyAxisAngle(new THREE.Vector3(0, 0, 1), orbit.rotation.z)
      
      // Create trail particles
      const particleCount = 50
      const particleGeometry = new THREE.BufferGeometry()
      const particlePositions = new Float32Array(particleCount * 3)
      const particleSizes = new Float32Array(particleCount)
      
      // Create particle trail behind money symbol
      for (let j = 0; j < particleCount; j++) {
        const trailAngle = angle - (j * 0.05)
        const trailX = Math.cos(trailAngle) * orbitRadius
        const trailZ = Math.sin(trailAngle) * orbitRadius
        
        particlePositions[j * 3] = trailX
        particlePositions[j * 3 + 1] = 0
        particlePositions[j * 3 + 2] = trailZ
        
        // Particles get smaller as they trail
        particleSizes[j] = 0.2 * (1 - j / particleCount)
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1))
      
      // Create particle texture
      const particleCanvas = document.createElement('canvas')
      particleCanvas.width = 32
      particleCanvas.height = 32
      const particleCtx = particleCanvas.getContext('2d')
      if (particleCtx) {
        particleCtx.beginPath()
        particleCtx.arc(16, 16, 12, 0, Math.PI * 2)
        particleCtx.fillStyle = 'white'
        particleCtx.fill()
      }
      
      const particleTexture = new THREE.CanvasTexture(particleCanvas)
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.15,
        map: particleTexture,
        transparent: true,
        opacity: 0.7,
        color: 0x545454,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
      
      const particles = new THREE.Points(particleGeometry, particleMaterial)
      
      // Apply same rotation as orbit
      particles.rotation.x = orbit.rotation.x
      particles.rotation.z = orbit.rotation.z
      scene.add(particles)
      
      moneyOrbits.push({
        symbol,
        orbit,
        speed: 0.005 + Math.random() * 0.01,
        angle,
        radius: orbitRadius,
        particles
      })
    }

    // Animation
    let frame = 0
    const startTime = Date.now()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      
      const elapsedTime = (Date.now() - startTime) / 1000
      
      // Rotate globe
      globe.rotation.y += 0.004
      
      // Pulse glow
      const glowScale = 1 + Math.sin(elapsedTime * 0.5) * 0.05
      glow.scale.set(glowScale, glowScale, glowScale)
      
      // Animate money symbols
      moneyOrbits.forEach(moneyOrbit => {
        // Update angle
        moneyOrbit.angle += moneyOrbit.speed
        
        // Calculate new positions on orbit
        const x = Math.cos(moneyOrbit.angle) * moneyOrbit.radius
        const z = Math.sin(moneyOrbit.angle) * moneyOrbit.radius
        
        // Create rotation matrix from orbit's rotation
        const rotationX = new THREE.Matrix4().makeRotationX(moneyOrbit.orbit.rotation.x)
        const rotationZ = new THREE.Matrix4().makeRotationZ(moneyOrbit.orbit.rotation.z)
        const rotationMatrix = new THREE.Matrix4().multiplyMatrices(rotationZ, rotationX)
        
        // Apply rotation to position
        const position = new THREE.Vector3(x, 0, z)
        position.applyMatrix4(rotationMatrix)
        
        // Update symbol position
        moneyOrbit.symbol.position.copy(position)
        
        // Orient symbol to face direction of travel
        moneyOrbit.symbol.lookAt(0, 0, 0)
        moneyOrbit.symbol.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2)
        
        // Update particles trail
        const particlePositions = moneyOrbit.particles.geometry.attributes.position.array as Float32Array
        
        for (let i = particlePositions.length / 3 - 1; i > 0; i--) {
          // Shift particles forward in the trail (move each particle to the position of the one in front of it)
          particlePositions[i * 3] = particlePositions[(i - 1) * 3]
          particlePositions[i * 3 + 1] = particlePositions[(i - 1) * 3 + 1]
          particlePositions[i * 3 + 2] = particlePositions[(i - 1) * 3 + 2]
        }
        
        // Set the first particle to the current symbol position
        particlePositions[0] = position.x
        particlePositions[1] = position.y
        particlePositions[2] = position.z
        
        moneyOrbit.particles.geometry.attributes.position.needsUpdate = true
      })
      
      // Camera movement
      const cameraRadius = 10
      const cameraSpeed = 0.1
      camera.position.x = Math.sin(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.z = Math.cos(elapsedTime * cameraSpeed) * cameraRadius
      camera.position.y = 3 + Math.sin(elapsedTime * 0.2) * 1
      camera.lookAt(0, 0, 0)
      
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

// Utility functions to create currency symbols
function createDollarGeometry() {
  const shape = new THREE.Shape()
  // S-shaped dollar sign
  shape.moveTo(0, 0.5)
  shape.bezierCurveTo(0.5, 0.5, 0.5, 0, 0, 0)
  shape.bezierCurveTo(-0.5, 0, -0.5, -0.5, 0, -0.5)
  
  // Vertical line
  const lineShape = new THREE.Shape()
  lineShape.moveTo(0, 0.7)
  lineShape.lineTo(0, -0.7)
  
  const extrudeSettings = {
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 3
  }
  
  const dollarGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  const lineGeometry = new THREE.ExtrudeGeometry(lineShape, extrudeSettings)
  
  // Create combined buffer geometry
  const combinedGeometry = new THREE.BufferGeometry()
  
  // Convert to buffer geometries
  const dollarBufferGeometry = dollarGeometry.toNonIndexed()
  const lineBufferGeometry = lineGeometry.toNonIndexed()
  
  // Combine the geometries
  const dollarPositions = dollarBufferGeometry.getAttribute('position').array
  const linePositions = lineBufferGeometry.getAttribute('position').array
  
  const positions = new Float32Array(dollarPositions.length + linePositions.length)
  positions.set(dollarPositions, 0)
  positions.set(linePositions, dollarPositions.length)
  
  combinedGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  
  return combinedGeometry
}

function createEuroGeometry() {
  // Create simplified euro sign (just a curved C with lines)
  const circleGeometry = new THREE.CircleGeometry(0.5, 32, Math.PI / 6, Math.PI * 5 / 3)
  const circle = new THREE.Mesh(circleGeometry)
  circle.scale.set(1, 1, 0.2)
  
  // Create two lines
  const line1Geometry = new THREE.BoxGeometry(0.5, 0.1, 0.1)
  const line1 = new THREE.Mesh(line1Geometry)
  line1.position.set(-0.05, 0.2, 0)
  
  const line2Geometry = new THREE.BoxGeometry(0.5, 0.1, 0.1)
  const line2 = new THREE.Mesh(line2Geometry)
  line2.position.set(-0.05, -0.2, 0)
  
  // Create buffer geometries
  circle.updateMatrix()
  line1.updateMatrix()
  line2.updateMatrix()
  
  const euroGeometry = new THREE.BufferGeometry()
  euroGeometry.copy(circleGeometry)
  
  const line1BG = line1Geometry.clone().applyMatrix4(line1.matrix)
  const line2BG = line2Geometry.clone().applyMatrix4(line2.matrix)
  
  return euroGeometry
}

function createYenGeometry() {
  // Simplified Y symbol
  const topBarGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.1)
  const topBar = new THREE.Mesh(topBarGeometry)
  topBar.position.set(0, 0.5, 0)
  topBar.rotation.z = -Math.PI / 4
  
  const topBar2Geometry = new THREE.BoxGeometry(0.6, 0.1, 0.1)
  const topBar2 = new THREE.Mesh(topBar2Geometry)
  topBar2.position.set(0, 0.5, 0)
  topBar2.rotation.z = Math.PI / 4
  
  const stemGeometry = new THREE.BoxGeometry(0.1, 0.7, 0.1)
  const stem = new THREE.Mesh(stemGeometry)
  stem.position.set(0, -0.25, 0)
  
  // Update matrices for correct positioning
  topBar.updateMatrix()
  topBar2.updateMatrix()
  stem.updateMatrix()
  
  // Create combined geometry
  const yenGeometry = new THREE.BufferGeometry()
  
  return yenGeometry
}

function createPoundGeometry() {
  // Simplified pound symbol (just an L with a line)
  const boxGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.1)
  
  return boxGeometry
}

function createBitcoinGeometry() {
  // Simplified bitcoin symbol (just a B)
  const boxGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.1)
  
  return boxGeometry
} 
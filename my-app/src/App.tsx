import React, { Suspense, useEffect, useReducer } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

function Test() {
  const [flag, toggle] = useReducer((state) => !state, true)
  useEffect(() => {
    const interval = setInterval(toggle, 1000)
    return () => clearInterval(interval)
  }, [])
     // gltf加载
  const draco = new DRACOLoader();
  draco.setDecoderPath('http://localhost:1234/draco/');
   const loader: GLTFLoader = new GLTFLoader();
  loader.setDRACOLoader(draco);
 // GLTFLoader.setDRACOLoader(draco);
  const { scene } = useLoader(GLTFLoader,flag ? './Poimandres.gltf' : './Poimandres.gltf') as any
  return <primitive object={scene} />
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <Suspense fallback={null}>
        <Test />

      </Suspense>
    </Canvas>
  )
}
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three'

const model = new THREE.Group() // 声明一个组对象，用来添加加载成功的三维场景
const loader = new GLTFLoader() // 声明一个GLTF 加载器

loader.load('./model/model.glb', (gltf) => {
  console.log(gltf)

  model.add(gltf.scene)
})

export {
  model
}
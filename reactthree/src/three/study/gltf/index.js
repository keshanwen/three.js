import * as THREE from 'three'
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// 创建 GLTF 加载器对象
const loader = new GLTFLoader()


const group = new THREE.Group()

loader.load('./scene/model.glb', (gltf) => {
  console.log(gltf.scene)
  group.add(gltf.scene)
})

export {
  group
}
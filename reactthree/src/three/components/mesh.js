import * as THREE from 'three'


/*
  创建网格模型
*/
const geometry = new THREE.BoxGeometry(200, 200, 200)
const material = new THREE.MeshLambertMaterial({
  color: 0x0000ff
})

const mesh = new THREE.Mesh(geometry, material) // 网格模型对象 Mesh

export {
  mesh
}
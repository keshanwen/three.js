import * as THREE from 'three'

// 设置地面效果
export function setFloorHook() {
  const gridHelp = new THREE.GridHelper(500, 50, 0x003333, 0x003333);;
  const geometry = new THREE.PlaneGeometry(500, 500)
  const material = new THREE.MeshLambertMaterial({
    // map: xxxxx  // 材质属性
    color: 0xffffff,
    transparent: true,
    opacity: 0.2,
  });
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.y = 1
  mesh.rotateX(-Math.PI / 2)
  return {
    gridHelp,
    mesh
  }
}
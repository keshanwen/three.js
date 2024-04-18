import * as THREE from 'three'

export function setFloorHook() {
  const gridHelp = new THREE.GridHelper(300, 60, 0x003333, 0x003333);
  const geometry = new THREE.PlaneGeometry(300, 300)
  const material = new THREE.MeshLambertMaterial({
    // map: xxxxx  // 材质属性
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
  });
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.y = 1
  mesh.rotateX(-Math.PI / 2)
  return {
    gridHelp,
    mesh
  }
}
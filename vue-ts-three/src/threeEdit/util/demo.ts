import * as THREE from 'three';

const flowLightGroup = new THREE.Group()


const W = 10
const geometry = new THREE.PlaneGeometry(500, W);
const material = new THREE.MeshLambertMaterial({
  color: 'red',
  // color: 0x001111, //颜色
  // transparent: true,
  // visible: false
});


const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
// mesh.rotateY(Math.PI);
mesh.rotateX(Math.PI / 2)
// mesh.rotateZ(Math.PI)
mesh.position.y = 2

















flowLightGroup.add(mesh)



export {
  flowLightGroup
}
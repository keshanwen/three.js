import * as THREE from 'three';

const flowLightGroup = new THREE.Group()


const W = 12
const geometry = new THREE.PlaneGeometry(500, W);
const texLoad = new THREE.TextureLoader();
let texture = texLoad.load('http://localhost:1234/finv/流光.png');
// 设置阵列模式为 RepeatWrapping
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.x = 4;// x方向阵列
texture.repeat.y = 3;// y方向阵列


const material = new THREE.MeshLambertMaterial({
  map: texture,
  // color: 'yellow',
  color: 0x00ffff, //颜色
  side: THREE.DoubleSide,
  // transparent: true, //需要开启透明度计算，否则着色器透明度设置无效
  depthTest: false,
  opacity: 1
});



const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

mesh.position.y = 1
mesh.position.x = -48
mesh.rotateX(-Math.PI / 2); // 平行与平面
mesh.rotateZ(Math.PI / 2)



// let texture2 = texLoad.load('http://localhost:1234/finv/流光.png');
// texture2.repeat.x = 4;// x方向阵列
// texture2.repeat.y = 3;// y方向阵列
const mesh2 = mesh.clone()
mesh2.material = mesh.material.clone()
// mesh2.material.map = texture2
mesh2.material.color.set('red');
// mesh2.position.x = 48
mesh2.position.z = -14
mesh2.position.y = 3
mesh2.rotateZ(Math.PI / 2)



const mesh3 = mesh.clone();
mesh3.material = mesh.material.clone();
// mesh2.material.map = texture2
mesh3.material.color.set('#ef852f');
mesh3.position.x = 76






function flowAnimation() {
  requestAnimationFrame(flowAnimation);
  // texture.offset.y -= 0.02;
  texture.offset.x -= 0.02;
}
flowAnimation();













flowLightGroup.add(mesh)
flowLightGroup.add(mesh2)
flowLightGroup.add(mesh3)



export {
  flowLightGroup
}
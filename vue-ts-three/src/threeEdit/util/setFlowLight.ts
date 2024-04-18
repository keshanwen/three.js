import * as THREE from 'three';

const flowLightModel = new THREE.Group()





// 道路宽度
const W = 4

const textLoader = new THREE.TextureLoader();
const texture = textLoader.load('http://localhost:1234/finv/路面流光.png');
// 设置阵列模式为 RepeatWrapping
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.x = 8// x 方向阵列
const geometry = new THREE.PlaneGeometry(300, W);
const material = new THREE.MeshLambertMaterial({
  color: 0x001111, //颜色
  map: texture,
  //   transparent: true,
  //   depthTest: false,
});
const mesh = new THREE.Mesh(geometry, material)
mesh.position.z = -20
mesh.rotateX(-Math.PI / 2);
// mesh.rotateZ(-Math.PI / 2)





// const mesh2 = mesh.clone()
// mesh2.rotateZ(-Math.PI / 2);
// mesh2.position.set(-46,0,0)

flowLightModel.add(mesh)
















// const geometry = new THREE.PlaneGeometry(300, W)
// const material = new THREE.MeshLambertMaterial({
//   color: 0x001111, //颜色
//  // color: 'red'
//  // transparent: true,
//   // opacity: 0,
// // color: 'red'
// });
// const mesh = new THREE.Mesh(geometry, material)
// mesh.rotateX(-Math.PI / 2);
// mesh.rotateZ(-Math.PI / 2)
// // flowLightModel.add(mesh)



// const mesh2 = mesh.clone()
// const textLoader = new THREE.TextureLoader()
// const texture = textLoader.load('http://localhost:1234/finv/路面流光.png');
// // 设置阵列模式为 RepeatWrapping
// texture.wrapS = THREE.RepeatWrapping
// texture.wrapT = THREE.RepeatWrapping
// texture.repeat.x = 8// x 方向阵列
// mesh2.material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff, //颜色
//   map: texture,
//   transparent: true,
//   depthTest: false,
// });
// mesh2.material.color.set(0xffd700);
// mesh2.scale.y *= 0.1;
// // mesh2.position.z*=mesh.position.z+1
// // flowLightModel.add(mesh2);
// mesh2.position.y = W / 4;
// mesh2.position.x = -50

// mesh2.position.z = -40


// const mesh3 = mesh2.clone()
// mesh3.material = mesh2.material.clone()
// mesh3.position.y = -W / 4;
// const texture2 = textLoader.load('http://localhost:1234/finv/路面流光.png');
// // 设置阵列模式为 RepeatWrapping
// texture2.wrapS = THREE.RepeatWrapping;
// texture2.wrapT = THREE.RepeatWrapping;
// texture2.repeat.x = 8; // x方向阵列
// mesh3.material.map = texture2;
// mesh3.material.color.set(0x00ffff);
// // flowLightModel.add(mesh3);

function flowAnimation() {
  requestAnimationFrame(flowAnimation);
  //光带流动效果
  // texture.offset.x -= 0.02;
  // texture2.offset.x += 0.02;
}
flowAnimation();


// mesh.renderOrder = 0
// mesh2.renderOrder = 10
// mesh3.renderOrder = 10


export {
  flowLightModel
}
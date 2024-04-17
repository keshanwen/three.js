// 引入Three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';


var model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景
/**
 * 创建网格模型
 */
// 道路宽度
var W = 50;
var geometry = new THREE.PlaneGeometry(5000, W); //矩形平面
// 浏览器控制台查看几何体UV坐标
// console.log('geometry.attributes.uv',geometry.attributes.uv)
var material = new THREE.MeshLambertMaterial({
  color: 0x001111, //颜色
}); //材质对象Material
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
model.add(mesh); //网格模型添加到model中

var mesh2=mesh.clone();
var texLoa = new THREE.TextureLoader();
var texture = texLoa.load('./scene/路面流光.png');
// 设置阵列模式为 RepeatWrapping
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.x = 10;// x方向阵列

mesh2.material=  new THREE.MeshLambertMaterial({
  color: 0x00ffff, //颜色
  map:texture,
  transparent:true,
  depthTest:false,
}); //材质对象Material
mesh2.material.color.set(0xffd700);
mesh2.scale.y*=0.1
// mesh2.position.z*=mesh.position.z+1
model.add(mesh2);
mesh2.position.y = W/4


var mesh3=mesh2.clone();
mesh3.material = mesh2.material.clone()
mesh3.position.y = -W/4
var texture2 = texLoa.load('./scene/路面流光.png');
// 设置阵列模式为 RepeatWrapping
texture2.wrapS = THREE.RepeatWrapping
texture2.wrapT = THREE.RepeatWrapping
texture2.repeat.x = 10;// x方向阵列
mesh3.material.map = texture2
mesh3.material.color.set(0x00ffff)
model.add(mesh3);

function flowAnimation() {
  requestAnimationFrame(flowAnimation);
  //光带流动效果
  texture.offset.x -= 0.02;
  texture2.offset.x += 0.02;
}
flowAnimation();



mesh.renderOrder =0;
mesh2.renderOrder =10;
mesh3.renderOrder =10;

export {
  model
}
// 引入Three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';


var model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

var c = [
  0, 0, //顶点1坐标
  60, 0, //顶点2坐标
  60, 80, //顶点3坐标
  40, 120, //顶点4坐标
  -20, 80, //顶点5坐标
  0, 0, //顶点6坐标  和顶点1重合
]

var geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
var posArr = [];
var h = 20; //围墙拉伸高度
for (var i = 0; i < c.length - 2; i += 2) {
  // 三角形1  三个顶点坐标
  posArr.push(c[i], c[i + 1], 0, c[i + 2], c[i + 3], 0, c[i + 2], c[i + 3], h);
  // 三角形2  三个顶点坐标
  posArr.push(c[i], c[i + 1], 0, c[i + 2], c[i + 3], h, c[i], c[i + 1], h);
}
// 设置几何体attributes属性的位置position属性
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(posArr), 3);
geometry.computeVertexNormals();
var material = new THREE.MeshLambertMaterial({
  color: 0xffff00, //三角面颜色
  side: THREE.DoubleSide, //两面可见
  // wireframe:true,//查看三角形结构
});
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
mesh.rotateX(-Math.PI/2);
model.add(mesh);

plane();//设置一个地面
function plane() {
    var gridHelper = new THREE.GridHelper(300, 15, 0x003333, 0x003333);
    model.add(gridHelper);
    var geometry = new THREE.PlaneGeometry(310, 310); 
    var material = new THREE.MeshLambertMaterial({
        // map: texture,
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 1
    model.add(mesh);
    mesh.rotateX(-Math.PI / 2);
}

export {
  model
}
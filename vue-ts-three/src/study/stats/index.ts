import * as THREE from 'three'


const group = new THREE.Group()
// 随机创建大量的模型,测试渲染性能
/* for (var i = 0; i < 1000; i++) {
  var geometry = new THREE.BoxGeometry(5, 5, 5);
  var material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
  });
  var mesh = new THREE.Mesh(geometry, material);
  var x = (Math.random() - 0.5) * 2 * 100;
  var y = (Math.random() - 0.5) * 2 * 100;
  var z = (Math.random() - 0.5) * 2 * 100;
  mesh.position.set(x, y, z);
  group.add(mesh)
} */


// 球体网格模型
// const geometry = new THREE.SphereGeometry(100, 25, 25);
// 生成更多顶点数据查看geometry占用内存变化
var geometry = new THREE.SphereGeometry(100, 1000, 1000);
// console.log(geometry.attributes);// 控制台查看顶点数据
// console.log(geometry.attributes.position.array);
const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff,
    // wireframe:true,
});
const mesh = new THREE.Mesh(geometry, material);




export {
  group,
  mesh
}

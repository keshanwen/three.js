import * as THREE from 'three'



// const geometry = new THREE.BoxGeometry(20, 20, 20)
// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff
// })


// const group = new THREE.Group()
// group.name = 'i am group'
// const mesh1 = new THREE.Mesh(geometry, material)
// mesh1.name = 'i am mesh1'
// const mesh2 = new THREE.Mesh(geometry, material)
// mesh2.name = 'i am mesh2'
// mesh2.translateX(25)

// // group.add(mesh1)
// // group.add(mesh2)




// const mesh3 = new THREE.Mesh(geometry, material)
// mesh3.translateY(40)

// mesh2.add(mesh3)


// group.add(mesh1, mesh2)

/* group.translateY(100)
group.scale.set(4, 4, 4)
// //父对象旋转，子对象跟着旋转
// group.rotateY(Math.PI / 6)
group.rotateY(Math.PI / 6)
 */


// const Object3DGroup = new THREE.Object3D()

// Object3DGroup.add(mesh1, mesh2)

// 批量创建多个长方体表示高层楼
// const group1 = new THREE.Group(); //所有高层楼的父对象
// group1.name = "高层";
// for (let i = 0; i < 5; i++) {
//   const geometry = new THREE.BoxGeometry(20, 60, 10);
//   const material = new THREE.MeshLambertMaterial({
//     color: 0x00ffff
//   });
//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.position.x = i * 30; // 网格模型mesh沿着x轴方向阵列
//   group1.add(mesh); //添加到组对象group1
//   mesh.name = i + 1 + '号楼';
//   // console.log('mesh.name',mesh.name);
// }
// group1.position.y = 30;


// const group2 = new THREE.Group();
// group2.name = "洋房";
// // 批量创建多个长方体表示洋房
// for (let i = 0; i < 5; i++) {
//   const geometry = new THREE.BoxGeometry(20, 30, 10);
//   const material = new THREE.MeshLambertMaterial({
//     color: 0x00ffff
//   });
//   const mesh = new THREE.Mesh(geometry, material);
//   mesh.position.x = i * 30;
//   group2.add(mesh); //添加到组对象group2
//   mesh.name = i + 6 + '号楼';
// }
// group2.position.z = 50;
// group2.position.y = 15;

// const model = new THREE.Group();
// model.name = '小区房子';
// model.add(group1, group2);
// model.position.set(-50, 0, -25);


// // 递归遍历model包含所有的模型节点
// /* model.traverse(function (obj) {
//   console.log('所有模型节点的名称', obj.name);
//   // obj.isMesh：if判断模型对象obj是不是网格模型'Mesh'
//   if (obj.isMesh) {//判断条件也可以是obj.type === 'Mesh'
//     obj.material.color.set(0xffff00);
//   }
// }); */

// // 返回名.name为"4号楼"对应的对象
// // const nameNode = scene.getObjectByName("4号楼");
// // nameNode.material.color.set(0xff0000);


// const res = model.getObjectByName('4号楼')
// if (res) {
//   res.material.color.set(0xff0000)
// }

// mesh的世界坐标就是mesh.position与group.position的累加

// 长方体的几何中心默认与本地坐标原点重合
const geometry = new THREE.BoxGeometry(20, 20, 20)
// 平移几何体的顶点坐标,改变几何体自身相对局部坐标原点的位置
geometry.translate(0,10,0)

const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff
})

const mesh = new THREE.Mesh(geometry, material);
const mesh1 = mesh.clone()
const mesh2 = mesh.clone()
mesh.position.set(50, 0, 0);
mesh1.position.set(100, 0, 0);
const group = new THREE.Group();
group.add(mesh);
group.add(mesh1)
group.add(mesh2)
group.position.set(50, 0, 0);

/* function render() {
  mesh.rotateY(0.01);//旋转动画
  requestAnimationFrame(render);
}
render(); */


// mesh.getWorldPosition(Vector3)读取一个模型的世界坐标，并把读取结果存储到参数Vector3中
// 声明一个三维向量用来表示某个坐标
const worldPosition = new THREE.Vector3();
// 获取mesh的世界坐标，你会发现mesh的世界坐标受到父对象group的.position影响
mesh.getWorldPosition(worldPosition);
console.log('世界坐标', worldPosition);
console.log('本地坐标', mesh.position);

// mesh.add(坐标系)给mesh添加一个局部坐标系。
//可视化mesh的局部坐标系
const meshAxesHelper = new THREE.AxesHelper(50);
mesh.add(meshAxesHelper);


console.log(group.children)

setTimeout(() => {
  // 注意:如果多个模型引用了同一个材质，如果该材质.visible设置为false，意味着隐藏绑定该材质的所有模型。
  mesh.material.visible = false
}, 2000)

setTimeout(() => {
 mesh.material.visible = true
}, 3000)

export {
  group,
}

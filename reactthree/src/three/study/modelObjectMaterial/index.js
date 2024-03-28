import * as THREE from 'three'

/*
  点模型 Points 线模型 Line 网格模型 Mesh 等模型的父类是 Object3D
*/

// const geometry = new THREE.BoxGeometry(40,40,40)
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00
// })


// const mesh = new THREE.Mesh(geometry, material)

/*
 在 three.js 中，THREE.Vertor3 来表示三维空间中的一个点或者一个向量， 同时可以通过访问模型的 position 属性来获取或设置模型的位置。
 模型位置属性.position 用一个三维变量表示，那意味着，以后你想改变位置属性，应该查询 Vector3
 通过模型位置属性.position 可以设置模型在场景Scene 中的位置。模型位置.position 的默认值是 THREE.Vector3(0,0,0), 表示坐标原点

*/

// 创建一个三维向量， 表示一个特定的位置
/* const v3 = new THREE.Vector3(0, 0, 0)


v3.set(40, 0, 0)
v3.x = 100 */



/*
  改变位置在属性.posotion 可以设置模型在场景中的位置。模型位置.posiotion 的默认值是 THREE.Vector3(0,0,0), 表示坐标原点。
*/
// 将这个向量设置为立方体的位置。
// cube.position.copy(v3)
// cube.position.y = 80

// cube.position.set(40,40,40)

// setInterval(() => {
//   cube.translateX(10)

// },1000)


/*
    向着自定义的方向移动。向量 Vector3 对象表示方向。
    normalize() 对一个向量进行归一化处理。归一化意味着将向量的长度缩减到1，方向不变，使其成为单位向量

*//*
const axis = new THREE.Vector3(1, 1, 1)
axis.normalize() // 向量归一化 */

// 向着 axis 方向平移 100
// cube.translateOnAxis(axis, 100)



/*

  缩放：
    属性.scale 表示模型对象 xyz 三个方向上的缩放比列，.scale 的属性值是一个三维对象 Vector3 默认值是 new THREE.Vector3(1,1,1)

*/


// cube.scale.x = 2

// cube.scale.set(0.5,1.5,2)


/* const sV3 = new THREE.Vector3(2, 2, 2)
cube.scale.copy(sV3) */

/*
  欧拉 Euler 与角度属性 .rotation
*/

// 创建一个欧拉对象,表示绕着 xyz 轴分别旋转 45 deg 0 deg 90 deg
// const Euler = new THREE.Euler(Math.PI / 4, 0, Math.PI / 2)

// const Euler = new THREE.Euler()
// Euler.x = Math.PI / 4
// Euler.y = Math.PI / 2
// Euler.z = Math.PI / 4

// cube.rotation.copy(Euler)


// setTimeout(() => {
//   cube.rotation.y += Math.PI / 3
// }, 1000)

// setTimeout(() => {
//   cube.rotation.y += Math.PI / 3
// }, 2000)


// setTimeout(() => {
//   cube.rotation.y -= Math.PI / 3
// }, 3000)


// cube.rotateX(Math.PI / 4)

// function render() {
//   cube.rotation.y += 0.1
//   window.requestAnimationFrame(render)
// }
// render()

// 绕某个轴旋转
// const axis = new THREE.Vector3(1, 1, 1)
// cube.rotateOnAxis(axis, Math.PI / 8)


// 模型材质颜色 （Color 对象）


// 创建一个颜色对象
// const color = new THREE.Color(0, 1, 0) // 默认是纯白色

// console.log(color)
// material.color.copy(color)

// 改变颜色的方法
// color.r = 0
// color.g = 0
// color.b  = 0
// color.setRGB(0,1,0)
// color.setHex(0x00ff00)
// color.setStyle('#00ff00')
// color.set('#00ff00')

// console.log(color)



// console.log(material.color)


// 重置模型材质的颜色
// cube.material.color.set('red')
// material.color.set('rgb(255,0,0)')



// console.log(material)

 /*
 模型材质父类 Material

  基础网格材质 MeshBasicMaterial  这种材质不受光照的影响
  漫反射网格材质 MeshLambertMaterial
  高光网格材质 MeshPhongMaterial

 */
const geometry = new THREE.BoxGeometry(40, 40, 40)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide
  // side: THREE.BackSide
})


const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)

mesh2.position.x = 100
/*

型材质和几何体属性
  几何体  geometry
  材质属性 material

*/

// setTimeout(() => {
//   mesh.material.color.set(0xffff00);
//   mesh.geometry.translate(0,200,0)
// },1000)

/*
  克隆 clone()  复制 copy()

*/
// const v1 = new THREE.Vector3(1, 2, 3)
// console.log(v1, 'v1')
// // v2 是一个新的Vector3 对象，和 v1的 x y z 属性值一样
// const v2 = v1.clone()
// // console.log(v2, 'v2')

// const v3 = new THREE.Vector3(4, 5, 6)
// v3.copy(v1)

// console.log(v3, 'v3')
// 通过克隆 clone() 获得的新模型和原来的模型共享材质和几何体
const mesh3 = mesh.clone()
mesh3.position.x = 200



const group = new THREE.Group()

group.add(mesh)
group.add(mesh2)
group.add(mesh3)

// 这种情况下改变属性不会随着一起改变
const mesh4 = mesh.clone()
mesh4.geometry = mesh.geometry.clone()
mesh4.material = mesh.material.clone()
mesh4.position.copy(mesh3.position)
mesh4.position.y = 80


group.add(mesh4)

setTimeout(() => {
  material.color.set(0xffff00)
},1000)


function render() {
  mesh.rotateY(0.01)
  mesh2.rotation.copy(mesh.rotation)
  window.requestAnimationFrame(render)
}

render()

console.log(mesh)


const cube = mesh
export {
  cube,
  mesh2,
  group
}

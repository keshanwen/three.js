import * as THREE from 'three'



/*

  BoxGeometry  ShpereGeometry   都是基于 BufferGeometry 类构建的

  BufferGeometry 是一个米有任何形状的空几何体， 可以通过 BufferGeometry 自定义任何几何形状, 具体一点说就是定义顶点数据

*/
// 创建一个空的几何体对象
const geometry = new THREE.BufferGeometry()

// 类型化数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0, // 顶点1
  50, 0, 0, // 顶点2
  0, 100, 0, // 顶点3
  0, 0, 10, // 顶点4
  0, 0, 100,// 顶点5
  50,0,10 // 顶点6
])

// 创建缓冲区对象。 3个为一组， 表示一个顶点 xyz 坐标
const attribute = new THREE.BufferAttribute(vertices, 3)

geometry.attributes.position = attribute

// 点模型 Points
const material = new THREE.PointsMaterial({
  color: 0xffff00,
  size: 10.0 //点对象像素尺寸
})

const points = new THREE.Points(geometry, material) // 点模型对象

// 线模型对象
const LineMaterial = new THREE.LineBasicMaterial({
  color: 0xffff00,
})
const line = new THREE.Line(geometry, LineMaterial)

// 闭合线条
const closeLine = new THREE.LineLoop(geometry, LineMaterial)


// 非连续线条
const disContinuousLine = new THREE.LineSegments(geometry, LineMaterial)

// 网格模型（三角形概念）
/*
  网格模型Mesh 其实就是一个一个三角形（面）拼接构成。使用网格模型Mesh 渲染几何体geometry, 就是几何体所有顶点坐标三个为一组， 构成一个三角形，
  多组顶点构成多个三角形，就可以来模拟表示物体的表面了。
*/
const materialS = new THREE.MeshBasicMaterial({
  color: 0x0000ff, //材质颜色
  // side: THREE.FrontSide // 默认只有正面可以见
   side: THREE.DoubleSide
 // side: THREE.BackSide // 设置只有背面可以见
})

const meshs = new THREE.Mesh(geometry, materialS)



// 构建一个矩形平面几何体
const rectangleGeometry = new THREE.BufferGeometry()
const rectangleVertices = new Float32Array([
  0, 0, 0, // 顶点1
  80, 0, 0, // 顶点2
  80, 80, 0, // 顶点3
  0, 0, 0, // 顶点4
  80, 80, 0, // 顶点5
  0, 80, 0 // 顶点6
])

const reactangelAttribute = new THREE.BufferAttribute(rectangleVertices, 3)
rectangleGeometry.attributes.position = reactangelAttribute

const reactangleMesh = new THREE.Mesh(rectangleGeometry, materialS)

// 几何体顶点索引数据
/*
  网格模型Mesh 对应的几何体BufferGeometry，拆分为多个三角形后， 很多三角形重合的顶点位置坐标是相同的，这时候如果想减少顶点坐标数据量，
  可以借助几何体顶点索引 geometry.index 来实现
*/
const newGemometry = new THREE.BufferGeometry()
const rectAnglesVertices = new Float32Array([
  0, 0, 0,
  80, 0, 0,
  80, 80, 0,
  0,80,0
])
const reactnglesAttribute = new THREE.BufferAttribute(rectAnglesVertices, 3)
newGemometry.attributes.position = reactnglesAttribute


const newMesh = new THREE.Mesh(newGemometry, materialS)

// Unit16Array 类型数组创建顶点索引数据
const indexs = new Uint16Array([
  0,1,2,0,2,3
])

// 索引数据赋值给几何体的 index 属性
newGemometry.index = new THREE.BufferAttribute(indexs, 1) // 1个 为一组


// 顶点法线数据
// MeshBasicMaterial 不受光照影响.。 使用受光照影响的材质， 几何体Geometry 需要定义顶点法线数据
const testMaterial = new THREE.MeshLambertMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide, //两面可见
})

const testMesh = new THREE.Mesh(newGemometry, testMaterial)

// const normals = new Float32Array([
//   0, 0, 1,
//   0, 0, 1,
//   0, 0, 1,
//   0, 0, 1,
//   0, 0, 1,
//   0, 0, 1,
//   0,0,1
// ])

// // 设置几何体的顶点法线属性 .attributes.normal
// newGemometry.attributes.normal = new THREE.BufferAttribute(normals, 3)

// 矩形平面，有索引，两个三角形，有2个顶点重合，有4个顶点
// 每个顶点的法线数据和顶点位置数据一一对应
const normals = new Float32Array([
  0, 0, 1, //顶点1法线( 法向量 )
  0, 0, 1, //顶点2法线
  0, 0, 1, //顶点3法线
  0, 0, 1, //顶点4法线
]);
// 设置几何体的顶点法线属性.attributes.normal
newGemometry.attributes.normal = new THREE.BufferAttribute(normals, 3);

// 查看 three.js 自带几何体顶点
const planeGeo = new THREE.PlaneGeometry(100, 50,1,1)


const testMaterials = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  wireframe: true // 线条模式渲染mesh 对应的三角形数据
})



const planeMesh = new THREE.Mesh(planeGeo, testMaterials)

// 几何体细分数
/*
  球体细分数，宽，高两个方向上的细分数。
  如果球体细分数比较低， 表面就不会那么光滑。
  对于一个曲面而言，细分数越大，表面越光滑，但是三角形和顶点数量却越多
  几何体三角形数量或者说顶点数量直接影响 Three.js 的渲染性能，在不影响渲染效果的情况下，一般尽量越少越好
*/
const ballGeometry = new THREE.SphereGeometry(50, 32, 16)
const ballMesh = new THREE.Mesh(ballGeometry, testMaterials)


// 旋转，缩放，平移几何体 =====》 本质都是改变几何体的顶点数据
const boxGemo = new THREE.BoxGeometry(60, 60, 60)
const boxMesh = new THREE.Mesh(boxGemo, materialS)

// setTimeout(() => {
//   // boxGemo.scale(4, 4, 4)
//   boxGemo.translate(50,0,0)
//   console.log('scale')
// }, 2000)
// console.log(boxMesh.position.x)

// function run(x) {
//   if (x >= 200) {
//     window.requestAnimationFrame(run)
//     return
//   }
//   x += 1
//   boxGemo.translate(x, 0, 0)
//   window.requestAnimationFrame(() => { })

// }
// run(boxMesh.position.x)

let x = 0
let setId = setInterval(() => {
  x += 10
  if (x >= 60) {
    boxGemo.rotateX(Math.PI / 9)

    if (x >= 200) {
      boxGemo.center()
      window.clearInterval(setId)
    }

  } else {

    boxGemo.translate(x, 0, 0)
  }
  console.log(x)

},100)


export {
  points,
  line,
  closeLine,
  disContinuousLine,
  meshs,
  reactangleMesh,
  newMesh,
  testMesh,
  planeMesh,
  ballMesh,
  boxMesh
}
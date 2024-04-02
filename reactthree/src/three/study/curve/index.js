import * as THREE from 'three'

/* const geometry = new THREE.BufferGeometry()
const R = 100
const N = 100
const sp = 2 * Math.PI / N;

const arr = []
// 设置圆心坐标
const cx = 0
const cy = 0
for (let i = 0; i < N;i++) {
  const angle = sp * i
  const x = R * Math.cos(angle) + cx
  const y = R * Math.sin(angle) + cy
  arr.push(x,y,0)
}

const vertices = new Float32Array(arr)

const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute


const material = new THREE.LineBasicMaterial({
  color: 0xff0000 //线条颜色
})


//const line = new THREE.Line(geometry, material)
const line = new THREE.LineLoop(geometry, material)
 */


const geometry = new THREE.BufferGeometry()


// const geometry = new THREE.Geometry()

// 参数1和2表示椭圆中心坐标  参数3和4表示x和y方向半径
const arc = new THREE.EllipseCurve(0, 0, 100, 50);
// var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
var points = arc.getPoints(50); // 可以从曲线上获取顶点数据。获取点的方式并不是按照曲线等间距的方式，而是会考虑曲线斜率变化，斜率变化快的位置返回的顶点更密集。
// var points = arc.getSpacedPoints(50); // 按照曲线长度等间距返回顶点数据



geometry.setFromPoints(points);// 赋值给 geometry.attribute.position 属性

const material = new THREE.LineBasicMaterial({
  color: 0xff0000
})

const line = new THREE.Line(geometry, material)

const materials = new THREE.PointsMaterial({
  color: 0xff0000,
  size: 4.0 //点对象像素尺寸
})

const point = new THREE.Points(geometry,materials)

export {
  line,
  point
}
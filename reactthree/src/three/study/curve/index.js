import * as THREE from 'three'

const geometry = new THREE.BufferGeometry()
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

export {
  line
}
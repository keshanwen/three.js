import * as THREE from 'three'


// 矩形平面网格模型，用来渲染火焰动画效果
const w = 60 // 火焰宽度 通过参数 w 可以快速调节火焰大小，以便于适应对应的三维场景
const h = 1.6 * w // 火焰高度

const geomerty = new THREE.PlaneBufferGeometry(w, h) // 矩形平面
geomerty.translate(0, h / 2, 0) // 火焰底部中点和局部坐标系原点重合

const textureLoader = new THREE.TextureLoader() // 纹理贴图加载器
const texture = textureLoader.load('./火焰test.png') // 创建一个纹理对象
const num = 15 // 火焰多少个帧图
// .repeat 方法设置 uv 两个方向纹理重复数量
texture.repeat.set(1 / num, 1) // 1 / num: 从图像上截图一帧火焰
/*

  texture.offest.x = 0 / num // 选择第1帧火焰
  texture.offest.x = 1 / num // 选择第2帧火焰

*/
const material = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true,
  side: THREE.DoubleSide // 双面可见
})
const flame = new THREE.Mesh(geomerty, material) // 火焰网格模型

let t = 0

function UpdateLoop() {
  t += 0.1 // 调节火焰切换速度
  if (t > num) t = 0
  texture.offset.x = Math.floor(t) / num
  window.requestAnimationFrame(UpdateLoop)
}
UpdateLoop()


export {
  flame
}




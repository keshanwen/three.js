import * as THREE from 'three'
/*
  通过纹理贴图加载器TextureLoader的load()方法加载一张图片可以返回一个纹理对象Texture，纹理对象Texture可以作为模型材质颜色贴图.map属性的值。

  自定义顶点的UV坐标通常是在创建几何体时进行的。UV坐标用于定义材质图像映射到模型表面的方式。以下是一个简单的例子，展示了如何在创建一个平面几何体时指定自定义的UV坐标：

  // 自定义顶点 uv 坐标 ???????????????????????????????????????
  在这个例子中，我们创建了一个PlaneGeometry实例，并且为它指定了自定义的UV坐标。我们首先初始化了四个THREE.Vector2对象，它们代表了左下、右下、右上和左上的UV坐标。然后我们将这些坐标分配给几何体的faceVertexUvs[0]数组，这样它们就会影响材质的映射。

  请注意，这里的UV坐标是基于每个面的，因此你需要为每一个面指定UV坐标。如果你想要创建一个球体或者是更复杂的几何体，你可能需要使用更复杂的UV映射方法。

  创建一个矩形平面，设置颜色贴图.map,注意选择背景透明的.png图像作为颜色贴图，同时材质设置transparent: true，这样png图片背景完全透明的部分不显示。

  纹理 UV 动画
  纹理对象Texture的.offset的功能是偏移贴图在Mesh上位置。

*/

const geometry = new THREE.PlaneGeometry(200, 200)
// CircleGeometry 的顶点UV坐标是按照圆形采样纹理贴图
// const geometry = new THREE.CircleGeometry(60,100)
// CircleGeometry的UV坐标会对颜色纹理贴图.map进行提取，CircleGeometry的UV坐标默认提取的就是一个圆形轮廓。

// geometry.faceVertexUvs[0][0] = [
//   new THREE.Vector2(0, 0), // 左下
//   new THREE.Vector2(1, 0), // 右下
//   new THREE.Vector2(1, 1), // 右上
// ];
// geometry.faceVertexUvs[0][1] = [
//   new THREE.Vector2(1, 1), // 右上
//   new THREE.Vector2(0, 1), // 左上
//   new THREE.Vector2(0, 0), // 左下
// ];



console.log(geometry.faceVertexUvs)
// const geometry = new THREE.BoxGeometry(100,100,100)
// const geometry = new THREE.SphereGeometry(60,25,25)
// 纹理贴图加载器 TextureLoader
const textLoader = new THREE.TextureLoader()
// .load 方法加载图形， 返回一个纹理对象 Texture
// const texture = textLoader.load('./火焰.png')
const texture = textLoader.load('./Earth.png')

texture.encoding = THREE.sRGBEncoding

// 设置阵列模式
// texture.wrapS = THREE.RepeatWrapping
// texture.wrapT = THREE.RepeatWrapping

// UV 两个方向纹理重复数量
// texture.repeat.set(4,4) // 注意选择合适的阵列数量


const material = new THREE.MeshBasicMaterial({
  // 设置纹理贴图： Texture 对象作为材质 map 属性的属性值
  map: texture, // map 表示材质的颜色贴图属性
  // color: 0x00ffff, // 颜色贴图map和color属性颜色值会混合。如果没有特殊需要，设置了颜色贴图.map,不用设置color的值，color默认白色0xffffff。
  side: THREE.DoubleSide,
 // transparent: true // 使用背景透明的png贴图，注意开启透明计算
})






const mesh = new THREE.Mesh(geometry, material)

// 注意旋转方向影响矩形平面背面还是正面朝上，threejs默认渲染正面，不渲染背面。
// 旋转矩形平面
// mesh.rotateX(-Math.PI / 2);

// mesh.position.y = 10

setInterval(() => {
  // texture.offset.x += 0.01;//纹理U方向偏移
  // texture.offset.y += 0.01;//纹理V方向偏移
}, 2000);

setTimeout(() => {
 /*  texture.offset.x += 0.5;//纹理U方向偏移
  // 设置.wrapS也就是U方向，纹理映射模式(包裹模式)
  texture.wrapS = THREE.RepeatWrapping;//对应offste.x偏移 */

/*
  texture.offset.y += 0.5;//纹理V方向偏移
  // 设置.wrapT也就是V方向，纹理映射模式
  texture.wrapT = THREE.RepeatWrapping;//对应offste.y偏移 */

}, 2000)




// 设置U方向阵列模式
// texture.wrapS = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
// texture.repeat.x = 4;//注意选择合适的阵列数量

// 渲染循环
/* function render() {
  texture.offset.x += 0.001;//设置纹理动画：偏移量根据纹理和动画需要，设置合适的值
  requestAnimationFrame(render);
}
render();
 */


export {
  mesh
}
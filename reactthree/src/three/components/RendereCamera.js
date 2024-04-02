import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const width = window.innerWidth
const height = window.innerHeight

/*
  相机设置
*/
const k = width / height  //Three.js输出的Cnavas画布宽高比
const s = 200  //控制相机渲染空间左右上下渲染范围，s越大，相机渲染范围越大

//THREE.OrthographicCamera()创建一个正投影相机对象
// -s * k, s * k, s, -s, 1, 1000定义了一个长方体渲染空间，渲染空间外的模型不会被渲染
// const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

camera.position.set(200, 300, 600); //相机在Three.js坐标系中的位置
// camera.position.set(40, 61, 122); //相机在Three.js坐标系中的位置
camera.lookAt(0, 0, 0); //相机指向Three.js坐标系原点


// camera.position.set(292, 223, 185);

/**
 * 创建渲染器对象
 */
const renderer = new THREE.WebGLRenderer({
  antialias: true, //开启锯齿
  alpha: true,
  logarithmicDepthBuffer: true // 设置对数深度缓冲区，优化深度冲突问题
});
renderer.setPixelRatio(window.devicePixelRatio);//设置设备像素比率,防止Canvas画布输出模糊。
renderer.setSize(width, height); //设置渲染区域尺寸
// renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
// renderer.domElement表示Three.js渲染结果,也就是一个HTML元素(Canvas画布)
// document.body.appendChild(renderer.domElement); //body元素中插入canvas对象


//创建控件对象  控件可以监听鼠标的变化，改变相机对象的属性
// 旋转：拖动鼠标左键
// 缩放：滚动鼠标中键
// 平移：拖动鼠标右键
const controls = new OrbitControls(camera, renderer.domElement);

/* controls.target.set(328, -98, -290)
controls.update() */


//解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.outputEncoding = THREE.sRGBEncoding;

/*
  注意！！！！！！！最新版本属性名字有改变。渲染器属性名.outputEncoding已经变更为.outputColorSpace。
  查WebGL渲染器文档，你可以看到.outputColorSpace的默认值就是SRGB颜色空间THREE.SRGBColorSpace，意味着新版本代码中，加载gltf，没有特殊需要，不设置.outputColorSpace也不会引起色差。

  //新版本，加载gltf，不需要执行下面代码解决颜色偏差
  renderer.outputColorSpace = THREE.SRGBColorSpace;//设置为SRGB颜色空间

*/

// 改变背景透明度值
// renderer.setClearAlpha(1);

 // renderer.setClearColor(0xb9d3ff, 0.4); //设置背景颜色和透明度



export { renderer, camera, controls };

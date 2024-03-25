// 引入Three.js
import * as THREE from 'three';
// 引入Three.js扩展库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



// width和height用来设置Three.js输出Canvas画布尺寸，同时用来辅助设置相机渲染范围
var width = window.innerWidth; //窗口文档显示区的宽度
var height = window.innerHeight; //窗口文档显示区的高度
/**
* 相机设置
*/
var k = width / height; //Three.js输出的Cnavas画布宽高比
// var s = 200; //控制相机渲染空间左右上下渲染范围，s越大，相机渲染范围越大
var s = 100;//根据你想要渲染的粮仓范围设置相机渲染范围大小
//THREE.OrthographicCamera()创建一个正投影相机对象
// -s * k, s * k, s, -s, 1, 1000定义了一个长方体渲染空间，渲染空间外的模型不会被渲染
/*
    THREE.OrthographicCamera()创建一个正投影相机对象

    left 摄像机视锥体左侧面
    right 摄像机视锥体右侧面
    top 摄像机视锥体上侧面
    bottom 摄像机视锥体下侧面
    near 摄像机视锥体近端面
    fear 摄像机视锥体远端面


    PerspectiveCamera  模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式。

    fov 摄像机视锥体垂直视野角度
    aspect 摄像机视锥体长宽比
    near 摄像机视锥体近端面
    far 摄像机视锥体远端面

*/
// var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
// // camera.position.set(200, 300, 200); camera.position.set(200, 300, 200); //相机在Three.js坐标系中的位置
// // camera.position.set(292, 223, 185);//通过相机控件OrbitControls旋转相机，选择一个合适场景渲染角度
// // camera.position.set(-258.1274265327985, 274.68297302722925, -164.7346229560638);
// // camera.position.set(272.82165581047525, 158.26659020839753, 264.0795913065541,);
// camera.position.set(272.82165581047525, 158.26659020839753, 264.0795913065541);
var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
camera.position.set(318, 162, 204);//通过相机控件OrbitControls旋转相机，选择一个合适场景渲染角度
// camera.position.set(155.85506332113272,
//     52.25468733357499, -75.58299000814472)

camera.lookAt(0, 0, 0); //相机指向Three.js坐标系原点
/**
 * 创建渲染器对象
 */
var renderer = new THREE.WebGLRenderer({
    antialias: true, //开启锯齿
});
renderer.setPixelRatio(window.devicePixelRatio);//设置设备像素比率,防止Canvas画布输出模糊。
renderer.setSize(width, height); //设置渲染区域尺寸
// renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
// renderer.domElement表示Three.js渲染结果,也就是一个HTML元素(Canvas画布)
// document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
renderer.outputEncoding = THREE.sRGBEncoding;//解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.setClearColor(0x005577, 1); // 渲染器设置three.js背景颜色 和雾化颜色相配




//创建控件对象  控件可以监听鼠标的变化，改变相机对象的属性
// 旋转：拖动鼠标左键
// 缩放：滚动鼠标中键
// 平移：拖动鼠标右键
var controls = new OrbitControls(camera, renderer.domElement);

export { renderer, camera };
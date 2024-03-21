import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 引入gui.js库
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'



const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 辅助坐标系
const axesHelper = new THREE.AxesHelper(250);
scene.add(axesHelper);



// 添加一个环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.9)
scene.add(ambient)
// 创建一个点光源
const pointLight = new THREE.PointLight(0xffffff, 1.0)
pointLight.position.set(0, 5, 0)
scene.add(pointLight)

// 相机设置
const width = window.innerWidth;
const height = window.innerHeight - 2;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

// 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x444444, 1); //设置背景颜色
renderer.setSize(width, height);



document.body.appendChild(renderer.domElement);

// 相机控件
const controls = new OrbitControls(camera, renderer.domElement);



/*
  three.js 三维空间有很多参数，不是心算出来的，往往需要可视化方式调试出来的。
*/

// gui
const gui = new GUI()

const light = gui.addFolder('光源设置')
light.close()
light.add(ambient, 'intensity', 0, 2).name('环境光源').step(0.01)
light.add(pointLight, 'intensity', 0, 5).name('点光源').step(0.01)

const position = gui.addFolder('坐标位置')
position.close()
position.add(mesh.position, 'x', -100, 100)
position.add(mesh.position, 'y', -100, 100)
// gui.add(mesh.position, 'y', {
//   left: -10,
//   center: 0,
//   right: 10
// })
position.add(mesh.position, 'z', -100, 100)

const obj = {
  color: 0x00fff,
  bool: false
}
gui.addColor(obj, 'color').onChange(value => {
  material.color.set(value)
})
gui.add(obj,'bool').name('控制旋转')


function render() {
  if (obj.bool) {
    mesh.rotation.y += 0.05
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render)
}
render()


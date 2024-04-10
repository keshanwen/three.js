// 引入相关库
import * as THREE from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

// 设置场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加模型（以添加一个立方体为例）
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 创建DragControls实例
const dragControls = new DragControls([]);
dragControls.addEventListener('dragstart', function (event) {
  // 可以在这里添加拖动开始时的逻辑
});
dragControls.addEventListener('dragend', function (event) {
  // 可以在这里添加拖动结束后的逻辑
});

// 更新object数组，确保包含所有可拖动的对象
dragControls.objects.push(cube);

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  dragControls.update(); // 更新拖动控件
}

animate();
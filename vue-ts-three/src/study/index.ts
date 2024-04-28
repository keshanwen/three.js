import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



let scene = new THREE.Scene();

const axesHelp = new THREE.AxesHelper(200);
scene.add(axesHelp);

const width = window.innerWidth - 6;
const height = window.innerHeight - 6;
const k = width / height;
const s = 150;
let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(-45, 102, 396);
camera.lookAt(scene.position);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色

const orbitControls = new OrbitControls(camera, renderer.domElement);

orbitControls.addEventListener('change', (target) => {
  renderer.render(scene, camera);
  console.log(camera.position, 'camer.position')

})

function render() {
  renderer.render(scene, camera);
 // window.requestAnimationFrame(render);
}
render();


export {
  scene,
  renderer
}
import * as THREE from 'three'
import { mesh } from './mesh'
// import { points, line, closeLine, disContinuousLine, meshs, reactangleMesh, newMesh, testMesh, planeMesh, ballMesh, boxMesh } from '../study/BufferGeometry/index'
// import { cube, mesh2, group } from '../study/modelObjectMaterial/index'
import { group } from '../study/leveModel/index'


/*
  创建场景对象 Scene
*/
const scene = new THREE.Scene()
// scene.add(mesh)
// scene.add(cube)
// scene.add(mesh2)
scene.add(group)


/*
  光源设置
*/
// 平行光1
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
// 平行光2
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight2.position.set(-400, -200, -300);
scene.add(directionalLight2);
//环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);


// Three.js三维坐标轴 三个坐标轴颜色RGB分别对应xyz轴
const axesHelper = new THREE.AxesHelper(250);
scene.add(axesHelper);



export { scene };
// 场景总文件
// 引入Three.js
import * as THREE from 'three';
import { model } from './model.js';
import { group, mesh } from './group.js'

/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
scene.add(model);//粮仓基地三维模型添加到场景中
// scene.add(group)



// 设置雾化效果，雾的颜色和背景颜色相近，这样远处网格线和背景颜色融为一体
scene.fog = new THREE.Fog(0x005577, -100, 1000);

/**
* 光源设置
*/
// 平行光1
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
// // // 平行光2
var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight2.position.set(-400, -200, -300);
scene.add(directionalLight2);
// // //环境光
var ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);

// Three.js三维坐标轴 三个坐标轴颜色RGB分别对应xyz轴
 var axesHelper = new THREE.AxesHelper(250);
scene.add(axesHelper);

export { scene };
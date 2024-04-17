// 场景总文件
// 引入Three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';
import { model } from './model.js';
import { GroundGrid } from './GroundGrid.js';
/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
model.position.y-=1.5;//整体下平移调整车在canvas画布上位置
scene.add(model);//粮仓基地三维模型添加到场景中
model.add(GroundGrid);//网格点阵地面插入model中
// 设置雾化效果，雾的颜色和背景颜色相近，这样远处三维场景和背景颜色融为一体
// 结合相机参数设置Fog的参数2和参数3
scene.fog = new THREE.Fog(0x001122, 10, 50);
/**
* 光源设置
*/
// 平行光1
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
// 平行光2
var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(-400, -200, -300);
scene.add(directionalLight2);
//环境光
var ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// Three.js三维坐标轴 三个坐标轴颜色RGB分别对应xyz轴
var axesHelper = new THREE.AxesHelper(250);
// scene.add(axesHelper);

export { scene };
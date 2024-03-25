// 场景总文件
// 引入Three.js
import * as THREE from 'three';
import { model } from './model.js';
import { group, mesh } from './group.js'
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
// scene.add(model);//粮仓基地三维模型添加到场景中
scene.add(group)


// 创建div元素(作为标签)
var div = document.createElement('div');
div.style.padding = '10px';
div.style.color = '#fff';
div.style.backgroundColor = 'rgba(25,25,25,0.5)';
div.innerHTML = '立方体';//标签名称
//div元素包装为CSS2模型对象CSS2DObject
var label = new CSS2DObject(div);

var pos = new THREE.Vector3();
mesh.getWorldPosition(pos);//获取obj世界坐标、
label.position.copy(pos);//标签标注在obj世界坐标
label.position.y += 50;//考虑到立方体的高度  标签标注在立方体的顶部平面中心位置
scene.add(label);//标签插入scene中

/* var axesHelper = new THREE.AxesHelper( 200 );//可视化mesh局部坐标系
axesHelper.position.copy(mesh.getWorldPosition());//获取mesh世界坐标
console.log(mesh.getWorldPosition())
scene.add( axesHelper ); */

var gridHelper = new THREE.GridHelper(600, 50);
gridHelper.position.y = -0.1;
scene.add(gridHelper);


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
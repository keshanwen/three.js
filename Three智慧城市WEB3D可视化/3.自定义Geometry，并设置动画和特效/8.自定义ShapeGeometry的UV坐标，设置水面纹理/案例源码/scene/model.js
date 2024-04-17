// 引入Three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';
import {
  WaterShapeMesh
} from './WaterShapeMesh.js';
import {
  ExtrudeMesh
} from './ExtrudeMesh.js';
var model = new THREE.Group(); //声明一个组对象，用来添加城市三场场景的模型对象
var loader = new THREE.FileLoader();
loader.setResponseType('json')
//城市建筑数据解析
loader.load('./scene/上海外滩.json', function (data) {
  var buildGroup = new THREE.Group(); //作为所有每栋楼Mesh的父对象
  data.features.forEach(build => {
    if (build.geometry) {
      // build.geometry.type === "Polygon"表示建筑物底部包含一个多边形轮廓
      //build.geometry.type === "MultiPolygon"表示建筑物底部包含多个多边形轮廓
      if (build.geometry.type === "Polygon") {
        // 把"Polygon"和"MultiPolygon"的geometry.coordinates数据结构处理为一致
        build.geometry.coordinates = [build.geometry.coordinates];
      }
      //build.properties.Floor*3近似表示楼的高度  
      var height = build.properties.Floor * 3;
      buildGroup.add(ExtrudeMesh(build.geometry.coordinates, height));
    }
  });
  model.add(buildGroup);
});
// 黄浦江
loader.load('./scene/黄浦江.json', function (data) {
  var buildGroup = new THREE.Group(); //作为所有每栋楼Mesh的父对象
  data.features.forEach(build => {
    if (build.geometry) {
      // build.geometry.type === "Polygon"表示建筑物底部包含一个多边形轮廓
      //build.geometry.type === "MultiPolygon"表示建筑物底部包含多个多边形轮廓
      if (build.geometry.type === "Polygon") {
        // 把"Polygon"和"MultiPolygon"的geometry.coordinates数据结构处理为一致
        build.geometry.coordinates = [build.geometry.coordinates];
      }
      buildGroup.add(WaterShapeMesh(build.geometry.coordinates));
    }
  });
  model.add(buildGroup);
});

export {
  model
}
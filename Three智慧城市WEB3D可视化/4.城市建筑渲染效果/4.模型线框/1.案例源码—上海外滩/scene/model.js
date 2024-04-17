// 引入Three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';

// 引入gltf模型加载库GLTFLoader.js
import {
  GLTFLoader
} from '../../../../three.js-r133/examples/jsm/loaders/GLTFLoader.js';
var model = new THREE.Group(); //声明一个组对象，用来添加城市三场场景的模型对象

var loader = new GLTFLoader(); //创建一个GLTF加载器
loader.load("./scene/上海外滩.glb", function (gltf) { //gltf加载成功后返回一个对象
  console.log('控制台查看gltf对象结构', gltf);
  // 设置地面材质
  var Floor = gltf.scene.getObjectByName('地面');
  Floor.material = new THREE.MeshLambertMaterial({
    color: 0x001111,
  });
  // 设置河面材质
  var River = gltf.scene.getObjectByName('河面');
  River.material = new THREE.MeshLambertMaterial({
    color: 0x001f1c,
  });
  // 所有建筑物递归遍历批量设置材质
  gltf.scene.getObjectByName('楼房').traverse(function (child) {
    if (child.isMesh) {
      child.material = new THREE.MeshLambertMaterial({
        // color: 0x1A92C6,//场景小对应颜色  可以亮一些
        color: 0x001111, //场景大可以暗一些  要不然整个屏幕太亮
        transparent: true, //允许透明计算
        opacity: 0.7, //半透明设置
      });
      // 设置模型边线
      var edges = new THREE.EdgesGeometry(child.geometry, 1);
      var edgesMaterial = new THREE.LineBasicMaterial({
        // color: 0x31DEEF,
        color: 0x006666,
      });
      var line = new THREE.LineSegments(edges, edgesMaterial);
      child.add(line);
    }
  });



  // 单独设置东方明珠材质
  var dongfang = gltf.scene.getObjectByName('东方明珠');
  dongfang.material = new THREE.MeshLambertMaterial({
    color: 0x1A92C6, //需要突出的模型可以更加亮一些
    // color: 0x001111,//场景大可以暗一些  要不然整个屏幕太亮
    transparent: true, //允许透明计算
    opacity: 0.7, //半透明设置
  });
  // 设置模型边线
  var edges = new THREE.EdgesGeometry(dongfang.geometry, 1);
  var edgesMaterial = new THREE.LineBasicMaterial({
    color: 0x31DEEF,
    // color: 0x006666,
  });
  var line = new THREE.LineSegments(edges, edgesMaterial);
  dongfang.add(line);



  //把gltf.scene中的所有模型添加到model组对象中
  model.add(gltf.scene);
})
export {
  model
}
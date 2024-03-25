// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



var model = new THREE.Group();//声明一个组对象，用来添加加载成功的三维场景
var loader = new GLTFLoader(); //创建一个GLTF加载器

/* 注意，在引入该文件时,需要将该文件放在静态资源目录下，否则导入不成功 */
loader.load("./scene/model.glb", function (gltf) {//gltf加载成功后返回一个对象
    // console.log('控制台查看gltf对象结构', gltf);
    //gltf.scene可以包含网格模型Mesh、光源Light等信息，至于gltf.scene是否包含光源，要看.gltf文件中是否有光源信息
   // console.log('gltf对象场景属性', gltf.scene);

    //把gltf.scene中的所有模型添加到model组对象中
    model.add(gltf.scene);
})

/* // 矩形纹理贴图测试
var texture = new THREE.TextureLoader().load( './scene/model_img3.png' );//加载纹理贴图
var geometry = new THREE.PlaneGeometry(185, 260);
var material = new THREE.MeshLambertMaterial({
    // color: 0xffff00,
    side: THREE.DoubleSide ,
    map:texture,
});

material.map.encoding = THREE.sRGBEncoding;//设置纹理贴图编码方式和WebGL渲染器一致
// console.log(THREE.sRGBEncoding, 'THREE.sRGBEncoding')
// console.log(material.map, 'material.map.encoding~~~~~~~~')
var plane = new THREE.Mesh(geometry, material);
plane.position.x = -200
plane.rotateX(Math.PI/2)
model.add(plane); */



export {model}
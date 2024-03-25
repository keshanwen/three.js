// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



var model = new THREE.Group();//声明一个组对象，用来添加加载成功的三维场景
var loader = new GLTFLoader(); //创建一个GLTF加载器

/* 注意，在引入该文件时,需要将该文件放在静态资源目录下，否则导入不成功 */
loader.load("./scene.gltf", function (gltf) {//gltf加载成功后返回一个对象
    console.log('控制台查看gltf对象结构', gltf);
    //gltf.scene可以包含网格模型Mesh、光源Light等信息，至于gltf.scene是否包含光源，要看.gltf文件中是否有光源信息
    console.log('gltf对象场景属性', gltf.scene);

    //把gltf.scene中的所有模型添加到model组对象中
    model.add(gltf.scene);
})


export {model}
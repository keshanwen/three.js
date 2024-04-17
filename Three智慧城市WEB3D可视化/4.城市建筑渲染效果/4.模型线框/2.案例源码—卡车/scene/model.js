// 引入Three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from '../../../../three.js-r133/examples/jsm/loaders/GLTFLoader.js';

var model = new THREE.Group();
var loader = new GLTFLoader(); //创建一个GLTF加载器
var model = new THREE.Group();//声明一个组对象，用来添加加载成功的三维场景
var loader = new GLTFLoader(); //创建一个GLTF加载器
loader.load("./scene/卡车.glb", function (gltf) {//gltf加载成功后返回一个对象
    // console.log('控制台查看gltf对象结构', gltf);
    // console.log('gltf对象场景属性', gltf.scene);

    // 递归遍历gltf.scene，批量更改所有Mesh的材质
    gltf.scene.traverse(function (object) {
        if (object.type === 'Mesh') {
            // console.log(object.material);//控制台查看mesh材质
            // MeshLambertMaterial：受光照影响   MeshBasicMaterial：不受光照影响  
            object.material = new THREE.MeshLambertMaterial({
                color: 0x1A92C6, //批量设置颜色
                transparent: true,//允许透明计算
                opacity: 0.7,//半透明设置
            })
            // 设置模型边线
            var edges = new THREE.EdgesGeometry(object.geometry, 50);
            var edgesMaterial = new THREE.LineBasicMaterial({
                color: 0x31DEEF,
            });
            var line = new THREE.LineSegments(edges, edgesMaterial);
            object.add(line);
        }
    })
    //把gltf.scene中的所有模型添加到model组对象中
    model.add(gltf.scene);
})
export { model }
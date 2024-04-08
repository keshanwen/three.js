// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { labelRenderer, tag } from './tag'
import { createFlame } from '../../three/components/flame'

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./draco/')

var model = new THREE.Group();//声明一个组对象，用来添加加载成功的三维场景
var loader = new GLTFLoader(); //创建一个GLTF加载器
const granaryArr = [] // 所有粮仓模型对象的集合， export 导出用于射线的获取

loader.setDRACOLoader(dracoLoader)

loader.load("./finv/d.glb", (gltf) => {
    model.add(gltf.scene)
})

loader.load("./finv/a.glb", (gltf) => {
    gltf.scene.position.set(120,0,100)
    model.add(gltf.scene)
})

/* 注意，在引入该文件时,需要将该文件放在静态资源目录下，否则导入不成功 */
loader.load("./finv/b.glb", function (gltf) {//gltf加载成功后返回一个对象
    gltf.scene.position.x = 120
    // console.log('控制台查看gltf对象结构', gltf);
    //gltf.scene可以包含网格模型Mesh、光源Light等信息，至于gltf.scene是否包含光源，要看.gltf文件中是否有光源信息
    // console.log('gltf对象场景属性', gltf.scene);
    // gltf.scene.traverse((object) => {
    //     if (object.type === 'Mesh') {
    //         //  // MeshLambertMaterial：受光照影响   MeshBasicMaterial：不受光照影响
    //         object.material = new THREE.MeshLambertMaterial({
    //             map: object.material.map, // 获取原来材质的颜色贴图属性值
    //             color: object.material.color // 读取原来材质的颜色
    //         })
    //     }
    // })

    // const group = gltf.scene.getObjectByName('粮仓')

/*     group.traverse((obj) => {
        if (obj.type === 'Mesh') {
            const label = tag(obj.name)
            const pos = new THREE.Vector3()
            obj.getWorldPosition(pos) // 获取 obj 的世界坐标
            const pName = obj.parent.name
            if (pName === '立筒仓') {
                pos.y += 36
            } else if (pName === "浅圆仓") {
                pos.y += 20
            } else if (pName === "平房仓") {
                pos.y += 17
            }
            label.position.copy(pos) // 标签标注在 obj 世界坐标
            model.add(label)
        }
    }) */
    // 批量更改所有平房仓颜色
   /*  group.children.forEach((mesh) => {
        mesh.material.color.set('red');
    }) */
    // group.traverse((obj) => {
    //     if (obj.type === 'Mesh') {
    //         granaryArr.push(obj)
    //     }
    // })

    // //把gltf.scene中的所有模型添加到model组对象中
    // // console.log(gltf.scene, 'scenc')
    model.add(gltf.scene);


    // function granaryFlame(name) {//name：粮仓名称编号
    //     var granary = gltf.scene.getObjectByName(name);
    //     var pos = new THREE.Vector3();
    //     granary.getWorldPosition(pos);//获取粮仓granary世界坐标设置火焰位置
    //     var flame = createFlame();//创建一个对象
    //     flame.position.copy(pos);
    //     if (granary.parent.name == "立筒仓") {
    //         flame.position.y += 36;//加上粮仓顶部高度
    //     } else if (granary.parent.name == "浅圆仓") {
    //         flame.position.y += 20;
    //     } else if (granary.parent.name == "平房仓") {
    //         flame.position.y += 17;
    //     }
    //     flame.position.y += -4;//适当向下偏移
    //     return flame;
    // }

    // const P_05Flame = granaryFlame('P_05')
    // model.add(P_05Flame)

    // setTimeout(() => {
    //     P_05Flame.stop()
    //     model.remove(P_05Flame)
    // }, 5000)

    // setTimeout(() => {
    //     const Q_05Flame = granaryFlame('Q_05')
    //     model.add(Q_05Flame)
    // }, 8000)
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



export {model, granaryArr}
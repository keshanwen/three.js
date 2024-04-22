<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import CreateThree from '@/threeEdit/createThreeInstance';
import * as THREE from 'three';
import { createTween } from '@/threeEdit/util/createBox';
import TWEEN from '@tweenjs/tween.js';
import { localParamsHook } from '@/threeEdit/util/localParams';
import { auxOpeatorHook } from '@/threeEdit/util/auxOpeator'
import { setFloorHook } from '@/threeEdit/util/setScene'
import {  model as flowLightModel } from '@/threeEdit/util/setFlowLight'
import { dispose } from '@/threeEdit/util/clearCache'
import { flowLightGroup } from '@/threeEdit/util/demo'


interface Position {
   x: number,
  y: number,
  z: number
}

interface SeriesOption {
  name: string
  position: Position
}

interface Config {
  series: SeriesOption[]
}


const config: Config = {
  series: [
    {
      name: '科技_工业建筑_001',
      position: {
        x: 0,
        y: 0,
        z: 0
      }
    }
  ]
}

let activeOpeator = ref(1)
const containerRef = ref();
let app = new CreateThree({
  logPosTargetBool: true,
  helperBool: true
});
const { setParams } = localParamsHook()
const { rename,
    singChildAncestors,
  addInScene,
    copyMesh,
    debuggerParams } = auxOpeatorHook(app)


function initMode() {
  app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_001.glb', (gltf) => {
    rename('科技_工业建筑_001', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)

      // debuggerParams(gltf.scene)
    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
    }
  });
   app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_005.glb', (gltf) => {
    rename('科技_工业建筑_005', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    setParams(gltf.scene, 'rotation.x')
    setParams(gltf.scene, 'rotation.y')
    setParams(gltf.scene, 'rotation.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)

    // debuggerParams(gltf.scene)
    console.log(gltf.scene.rotation)
    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
    }
   });
  app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_003.glb', (gltf) => {
    rename('科技_工业建筑_003', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    setParams(gltf.scene, 'rotation.x')
    setParams(gltf.scene, 'rotation.y')
    setParams(gltf.scene, 'rotation.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)


    const mesh2 = copyMesh(gltf.scene)
    rename('科技_工业建筑_003_02',mesh2)
    setParams(mesh2, 'position.x')
    setParams(mesh2, 'position.y')
    setParams(mesh2, 'position.z')
    singChildAncestors(mesh2)
    addInScene(mesh2)

    const mesh3 = copyMesh(gltf.scene)
    rename('科技_工业建筑_003_03',mesh3)
    setParams(mesh3, 'position.x')
    setParams(mesh3, 'position.y')
    setParams(mesh3, 'position.z')
    singChildAncestors(mesh3)
    addInScene(mesh3)

    // debuggerParams(mesh3)



    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
      app.ray?.push(mesh2);
      app.ray?.push(mesh3);
    }
  });
  app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_006.glb', (gltf) => {
    rename('科技_工业建筑_006', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    setParams(gltf.scene, 'rotation.x')
    setParams(gltf.scene, 'rotation.y')
    setParams(gltf.scene, 'rotation.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)



    for (let i = 2; i < 9;i++) {
      const newMesh = copyMesh(gltf.scene)
      rename(`科技_工业建筑_006_0${i}`,newMesh)
      setParams(newMesh, 'position.x')
      setParams(newMesh, 'position.y')
      setParams(newMesh, 'position.z')
      singChildAncestors(newMesh)
      addInScene(newMesh)
      if (i === 8) {
      //  debuggerParams(newMesh)
      }
      app.ray?.push(newMesh)
    }


    // debuggerParams(gltf.scene)
    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
    }
  });
  app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_004.glb', (gltf) => {
    rename('科技_工业建筑_004', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    setParams(gltf.scene, 'rotation.x')
    setParams(gltf.scene, 'rotation.y')
    setParams(gltf.scene, 'rotation.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)


    const mesh2 = copyMesh(gltf.scene)
    rename('科技_工业建筑_004_02',mesh2)
    setParams(mesh2, 'position.x')
    setParams(mesh2, 'position.y')
    setParams(mesh2, 'position.z')
    singChildAncestors(mesh2)
    addInScene(mesh2)

    const mesh3 = copyMesh(gltf.scene)
    rename('科技_工业建筑_004_03',mesh3)
    setParams(mesh3, 'position.x')
    setParams(mesh3, 'position.y')
    setParams(mesh3, 'position.z')
    singChildAncestors(mesh3)
    addInScene(mesh3)

    // debuggerParams(mesh2)
    // debuggerParams(mesh3)
    // debuggerParams(gltf.scene)

  if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
      app.ray?.push(mesh2);
    }
  });
  app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_002.glb', (gltf) => {
    rename('科技_工业建筑_002', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)

    for (let i = 2; i < 5; i++) {
      const newMesh = copyMesh(gltf.scene)
      rename(`科技_工业建筑_002_0${i}`,newMesh)
      setParams(newMesh, 'position.x')
      setParams(newMesh, 'position.y')
      setParams(newMesh, 'position.z')
      singChildAncestors(newMesh)
      addInScene(newMesh)
      app.ray?.push(newMesh);
      // if (i === 3 || i === 4 || i === 2) {
      //   debuggerParams(newMesh)
      // }
    }


 // debuggerParams(gltf.scene)

  if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
    }
  });
  app.GLTFLoader.load('http://localhost:1234/finv/科技氛围建筑_001.glb', (gltf) => {
    rename('科技氛围建筑_001', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
      // debuggerParams(gltf.scene)
    addInScene(gltf.scene)


  })
  app.GLTFLoader.load('http://localhost:1234/finv/科技氛围建筑_002.glb', (gltf) => {
    rename('科技氛围建筑_002', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    // debuggerParams(gltf.scene)
    addInScene(gltf.scene)


    const newMesh = copyMesh(gltf.scene)
    rename(`科技氛围建筑_002_02`,newMesh)
    setParams(newMesh, 'position.x')
    setParams(newMesh, 'position.y')
    setParams(newMesh, 'position.z')
    addInScene(newMesh)
  })
  app.GLTFLoader.load('http://localhost:1234/finv/科技氛围建筑_003.glb', (gltf) => {
    rename('科技氛围建筑_003', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    setParams(gltf.scene, 'rotation.x')
    setParams(gltf.scene, 'rotation.y')
    setParams(gltf.scene, 'rotation.z')
    addInScene(gltf.scene)

    const newMesh = copyMesh(gltf.scene)
    rename(`科技氛围建筑_003_02`,newMesh)
    setParams(newMesh, 'position.x')
    setParams(newMesh, 'position.y')
    setParams(newMesh, 'position.z')
    addInScene(newMesh)

  })
  app.GLTFLoader.load('http://localhost:1234/finv/科技氛围建筑_005.glb', (gltf) => {
    rename('科技氛围建筑_005', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    setParams(gltf.scene, 'rotation.x')
    setParams(gltf.scene, 'rotation.y')
    setParams(gltf.scene, 'rotation.z')
    addInScene(gltf.scene)

    const newMesh = copyMesh(gltf.scene)
    rename(`科技氛围建筑_005_02`,newMesh)
    setParams(newMesh, 'position.x')
    setParams(newMesh, 'position.y')
    setParams(newMesh, 'position.z')
    setParams(newMesh, 'rotation.x')
    setParams(newMesh, 'rotation.y')
    setParams(newMesh, 'rotation.z')
    addInScene(newMesh)
  })
}

function initMesh() {
  const geometry = new THREE.BoxGeometry(40, 40, 40);
  const geometry1 = new THREE.BoxGeometry(40, 60, 40);
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, //设置材质颜色
    transparent: true, //开启透明
    // opacity: 0.5,//设置透明度
  });
  const mesh = new THREE.Mesh(geometry1, material);
  mesh.name = '长方体';
  mesh.position.set(0, 0, 0);

  const mesh2 = new THREE.Mesh(geometry, material);
  const group = new THREE.Group();
  group.position.set(100, 0, 0);
  mesh2.position.set(0, 0, 100);
  group.add(mesh2);
  group.name = 'group1';

  const mesh3 = new THREE.Mesh(geometry, material);
  mesh3.name = '正方体';
  mesh3.position.set(0, 0, 100);

  let ballGeometry = new THREE.SphereGeometry(26, 26, 26);
  const sphere = new THREE.Mesh(ballGeometry, material);
  sphere.position.set(0, 0, -80);
  sphere.name = '球';

  // 挂载 名称name ，减小数据量
  mesh.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh.name;
    }
  });

  group.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = group.name;
    }
  });

  mesh3.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh3.name;
    }
  });

  sphere.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = sphere.name;
    }
  });

  app.scene.add(mesh);
  // app.scene.add(group)
  app.scene.add(mesh3);
  app.scene.add(sphere);

  //  test(mesh)
  // test(mesh2)
  console.log(mesh2.position);
  if (app.params.raycasterBool) {
    app.ray!.push(mesh);
    app.ray!.push(mesh3);
    app.ray!.push(sphere);
  }
}

function initScene() {
  const { gridHelp, mesh } = setFloorHook()
  app.scene.add(mesh)
  // app.scene.add(gridHelp)
 // app.scene.add(flowLightModel)
  // app.helper?.gui.addFolder()
   app.scene.add(flowLightGroup)
}


(function init() {
  initScene()
  initMode();
 // initMesh();
})();


function animaltionRun() {
  const R = 200; //相机圆周运动的半径

  const tween = createTween({ angle: 0 })
    .to({ angle: Math.PI * 2 }, 16000)
    .onUpdate((obj) => {
      app.camera.position.x = R * Math.cos(obj.angle);
      app.camera.position.y = R * Math.sin(obj.angle);
      app.camera.lookAt(0, 0, 0);
    })
    .start()
    .easing(TWEEN.Easing.Sinusoidal.InOut); //使用二次缓动函数

  function loop() {
    tween.update();
    console.log('loop');
    window.requestAnimationFrame(loop);
  }

  setTimeout(() => {
    loop();
  }, 2000);
}
// animaltionRun();


const opeatorClick = (value: number) => {
  activeOpeator.value = value


  /*
    2 的视角
      camera.position
        x
        :
        -59.501022560539425
        y
        :
        57.61790182641387
        z
        :
        103.19530043686964
    orbitControls.target
      x
      :
      25.830574608167666
      y
      :
      -19.148895678938896
      z
      :
      19.103891259651977


  */
  if (value === 2) {
   const tween = new TWEEN.Tween({
            // 相机开始坐标
            x: app.camera.position.x,
            y: app.camera.position.y,
            z: app.camera.position.z,
            // 相机开始指向的目标观察点
            tx: app.orbitControls.target.x,
            ty: app.orbitControls.target.y,
            tz: app.orbitControls.target.z,
        })
        .to({
            // 相机结束坐标
            x:  -59.501022560539425,
            y:  57.61790182641387,
            z:  103.19530043686964,
            // 相机结束指向的目标观察点
            tx: 25.830574608167666,
            ty: -19.148895678938896,
            tz: 19.103891259651977,
        }, 2000)
        .onUpdate(function (obj) {
          // 动态改变相机位置
          app.camera.position.set(obj.x, obj.y, obj.z);
          // 动态计算相机视线
          // app.camera.lookAt(obj.tx, obj.ty, obj.tz);
          app.orbitControls.target.set(obj.tx, obj.ty, obj.tz)
          app.orbitControls.update() // 内部执行 lookAT()
        })
      .start()
      .easing(TWEEN.Easing.Sinusoidal.InOut); //使用二次缓动函数


      function loop() {
        tween.update();
        console.log('loop');
        window.requestAnimationFrame(loop);
      }

     loop()
  }
}

onMounted(() => {
  app.append(containerRef.value);
});

onUnmounted(() => {
 dispose(app)
})
</script>

<template>
  <div ref="containerRef" class="home-view-wrap">
    <div class="title">
      智慧工厂运营平台
    </div>
    <div class="opeator">
      <div :class="[ activeOpeator === 1 ? 'active-item' : '', 'opeator-item']" @click="() => opeatorClick(1)">动态总览</div>
      <div :class="[ activeOpeator === 2 ? 'active-item' : '', 'opeator-item']"  @click="() => opeatorClick(2)">安防管理</div>
      <div :class="[ activeOpeator === 3 ? 'active-item' : '', 'opeator-item']"  @click="() => opeatorClick(3)">设备管理</div>
      <div :class="[ activeOpeator === 4 ? 'active-item' : '', 'opeator-item']"  @click="() => opeatorClick(4)">能耗管理</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-view-wrap {
 // display: flex;
  position: relative;
  height: 100vh;
  .title {
    position: absolute;
    color: white;
    width: 100%;
    text-align: center;
    top: 20px;
    font-size: 40px;
    font-weight: normal;
    font-family: cursive;
    font-weight: bolder;
    // border-bottom: 5px solid #ef852f;
    // .title-border {
    //   width: 40px;
    //   height: 2px;
    //    border-bottom: 5px solid #ef852f;
    // }
  }
  .opeator {
    color: white;
    position: absolute;
    bottom: 30px;
    display: flex;
    font-size: 18px;
    margin-left: calc(50% - 400px);
    .opeator-item {
      width: 130px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      flex: 1;
      margin-left: 60px;
      cursor: pointer;
      background-color: rgba(50,50,50,1);
    }
    .active-item {
      background-color:  #ef852f;
    }
  }
}
</style>

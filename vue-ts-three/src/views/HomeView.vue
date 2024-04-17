<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CreateThree from '@/threeEdit/createThreeInstance';
import * as THREE from 'three';
import { createTween } from '@/threeEdit/util/createBox';
import TWEEN from '@tweenjs/tween.js';
import { localParamsHook } from '@/threeEdit/util/localParams';
import { auxOpeatorHook } from '@/threeEdit/util/auxOpeator'


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

const containerRef = ref();
const app = new CreateThree({
  helperBool: true
});
const { setParams } = localParamsHook()
const { rename,
    singChildAncestors,
    addInScene,
    debuggerParams } = auxOpeatorHook(app)


function initMode() {
  app.GLTFLoader.load('http://localhost:1234/finv/科技_工业建筑_001.glb', (gltf) => {
    rename('科技_工业建筑_001', gltf.scene)
    setParams(gltf.scene, 'position.x')
    setParams(gltf.scene, 'position.y')
    setParams(gltf.scene, 'position.z')
    singChildAncestors(gltf.scene)
    addInScene(gltf.scene)

    debuggerParams(gltf.scene)
    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene);
    }
  });
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

(function init() {
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

onMounted(() => {
  app.append(containerRef.value);
});
</script>

<template>
  <div ref="containerRef" class="home-view-wrap"></div>
</template>

<style scoped lang="less">
.home-view-wrap {
  display: flex;
  height: 100vh;
}
</style>

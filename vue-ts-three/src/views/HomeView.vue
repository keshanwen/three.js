<script setup lang="ts">
import { ref,onMounted } from 'vue'
import CreateThree from '@/threeEdit/createThreeInstance'
import * as THREE from 'three'
import type { Object3DHanlde } from '@/threeEdit/type/threeInstance';
// 引入CSS2模型对象CSS2DObject
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';


const containerRef = ref()
const app = new CreateThree({
  helperBool: true,
  raycasterBool: true,
  sceneLabelBool: true
})

function initMode() {
  app.GLTFLoader.load('./finv/b.glb', (gltf) => {
    gltf.scene.position.set(100, 0, 60)
    gltf.scene.name = 'bbb'

    gltf.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene
      }
    })
    app.scene.add(gltf.scene)

    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene)
    }
  })

  app.GLTFLoader.load('./finv/c.glb', (gltf) => {
    gltf.scene.position.set(120, 0, 0)
    gltf.scene.name = 'ccc'

    gltf.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene
      }
    })
    app.scene.add(gltf.scene)
    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene)
    }
  })

  app.GLTFLoader.load('./finv/d.glb', (gltf) => {
    gltf.scene.position.set(0, 0, 0)
    gltf.scene.name = 'ddd'

    gltf.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene
      }
    })

    app.scene.add(gltf.scene)
    // instance.helper.transformControls.attach(gltf.scene)
    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene)
    }
  })

}





function initMesh() {
  const geometry = new THREE.BoxGeometry(40, 40, 40);
  const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff, //设置材质颜色
      transparent: true,//开启透明
      // opacity: 0.5,//设置透明度
  });
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = 'i am mesh'
  mesh.position.set(0, 0, 0)

  const mesh2 = new THREE.Mesh(geometry, material)
  const group = new THREE.Group()
  group.position.set(100,0,0)
  mesh2.position.set(0, 0, 100)
  group.add(mesh2)

  mesh.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh
    }
  })

  mesh2.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh2
    }
  })
  app.scene.add(mesh)
  app.scene.add(group)
  test(mesh2)
  console.log(mesh2.position)
  if (app.params.raycasterBool) {
    app.ray!.push(mesh)
    app.ray!.push(mesh2)
  }
}


function test(mesh?: Object3DHanlde | THREE.Object3D) {
   // 创建 html 元素
    const div = document.createElement('div');
    div.innerHTML = '立方体';
    div.style.padding = '10px';
    div.style.color = '#fff';
    div.style.backgroundColor = 'rgba(25,25,25,0.5)';
    div.style.borderRadius = '5px';



    // HTML元素转化为threejs的CSS2模型对象
  const tag: CSS2DObject = new CSS2DObject(div);

  if (mesh) {
    tag.position.y += 40
    mesh.add(tag)
  } else {
    tag.position.set(0, 0, 0);
    app.scene.add(tag);
  }
}


  (function init() {
    // initMode()
    initMesh()
  })()






onMounted(() => {
  app.append(containerRef.value)
})

</script>

<template>
  <div ref="containerRef" class="home-view-wrap">

  </div>

</template>


<style scoped lang="less">
.home-view-wrap {
  display: flex;
  height: 100vh;
}

</style>

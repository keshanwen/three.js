<script setup lang="ts">
import { ref,onMounted } from 'vue'
import CreateThree from '@/threeEdit/createThreeInstance'
import * as THREE from 'three'
import type { Object3DHanlde } from '@/threeEdit/type/threeInstance';

const containerRef = ref()
const app = new CreateThree({
  helperBool: true,
  raycasterBool: true
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
  mesh.position.set(0, 0, 100)

  mesh.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh
    }
  })
  app.scene.add(mesh)
  if (app.params.raycasterBool) {
    app.ray!.push(mesh)
  }
}



  (function init() {
    initMode()
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

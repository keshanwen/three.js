<script setup>
import { ref,onMounted } from 'vue'
import CreateThree from './three/createInstance'
import * as THREE from 'three'

const containerRef = ref()
const instance = new CreateThree();



function initMode() {
  instance.loader.load('./finv/b.glb', (gltf) => {
    gltf.scene.position.set(100,0,60)
    instance.scene.add(gltf.scene)
    if (instance.effectComposerBool) {
      instance.effectComposer.OutlinePass.selectedObjects.push(gltf.scene)
    }
  })
  instance.loader.load('./finv/c.glb', (gltf) => {
    gltf.scene.position.set(120,0,0)
    instance.scene.add(gltf.scene)
    if (instance.effectComposerBool) {
      instance.effectComposer.OutlinePass.selectedObjects.push(gltf.scene)
    }
   })
  instance.loader.load('./finv/d.glb', (gltf) => {
    gltf.scene.position.set(0,0,0)
    instance.scene.add(gltf.scene)
    instance.helper.transformControls.attach(gltf.scene)
    if (instance.effectComposerBool) {
      instance.effectComposer.OutlinePass.selectedObjects.push(gltf.scene)
    }
  })

}
initMode()



function initMesh() {
  const geometry = new THREE.BoxGeometry(40, 40, 40);
  const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff, //设置材质颜色
      transparent: true,//开启透明
      // opacity: 0.5,//设置透明度
  });
  const mesh = new THREE.Mesh(geometry, material)
  if (instance.effectComposerBool) {
    instance.effectComposer.OutlinePass.selectedObjects.push(mesh)
  }
  mesh.position.set(0,0,100)
  instance.scene.add(mesh)
}

initMesh()






onMounted(() => {
  containerRef.value.appendChild(instance.renderer.domElement)
})
</script>

<template>
  <div class="appId" ref="containerRef">

  </div>
</template>

<style scoped>
.appId {
  height: 100vh;
}

</style>

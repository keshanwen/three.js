<script setup>
import { ref,onMounted } from 'vue'
import CreateThree from './three/createInstance'

const containerRef = ref()
const instance = new CreateThree();



function initMode() {
  instance.loader.load('./finv/b.glb', (gltf) => {
    gltf.scene.position.set(100,0,60)
    instance.scene.add(gltf.scene)
  })
  instance.loader.load('./finv/c.glb', (gltf) => {
    gltf.scene.position.set(120,0,0)
    instance.scene.add(gltf.scene)
   })
  instance.loader.load('./finv/d.glb', (gltf) => {
    gltf.scene.position.set(0,0,0)
    instance.scene.add(gltf.scene)
  })

}
initMode()



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

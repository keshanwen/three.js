<template>
  <div ref="containerRef" class="about-home">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import CreateThree from '@/threeEdit/createThreeInstance';
import * as THREE from 'three';
import { setFloorHook } from '@/threeEdit/util/setScene'
import { model } from '@/threeEdit/util/flyLine'

let containerRef = ref()
let app = new CreateThree({
  helperBool: true,
  logPosTargetBool: true
});

  // const { gridHelp, mesh } = setFloorHook()
  // app.scene.add(model)

onMounted(() => {
  app.append(containerRef.value);
});

</script>

<style>
.about-home {
  height: 100vh;
}
</style>

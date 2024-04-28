<template>
  <div ref="containerRef" class="about-home">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three';
import { scene, renderer } from '@/study/index'

let containerRef = ref()

/* const geometry = new THREE.BoxGeometry(40, 40, 40);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); */



onMounted(() => {
  containerRef.value.appendChild(renderer.domElement); //body元素中插入canvas对象
})
</script>

<style>
 .about-home {
  height: 100vh;
}
</style>

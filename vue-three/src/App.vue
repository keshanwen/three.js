<script setup>
import { ref,onMounted } from 'vue'
import CreateThree from './three/createInstance'
import * as THREE from 'three'

const containerRef = ref()
const instance = new CreateThree();



function initMode() {
  instance.loader.load('./finv/b.glb', (gltf) => {
    gltf.scene.position.set(100, 0, 60)
    gltf.scene.name = 'bbb'

    gltf.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene
      }
    })
    instance.scene.add(gltf.scene)
    // if (instance.effectComposerBool) {
    //   instance.effectComposer.OutlinePass.selectedObjects.push(gltf.scene)
    // }
    if (instance.raycasterBool) {
      instance.Ray.push(gltf.scene)
    }
  })
  instance.loader.load('./finv/c.glb', (gltf) => {
    gltf.scene.position.set(120, 0, 0)
    gltf.scene.name = 'ccc'

    gltf.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene
      }
    })
    instance.scene.add(gltf.scene)
    // if (instance.effectComposerBool) {
    //   instance.effectComposer.OutlinePass.selectedObjects.push(gltf.scene)
    // }
    if (instance.raycasterBool) {
      instance.Ray.push(gltf.scene)
    }
   })
  instance.loader.load('./finv/d.glb', (gltf) => {
    gltf.scene.position.set(0, 0, 0)
    gltf.scene.name = 'ddd'

    gltf.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene
      }
    })

    instance.scene.add(gltf.scene)
    // instance.helper.transformControls.attach(gltf.scene)
    // if (instance.effectComposerBool) {
    //   instance.effectComposer.OutlinePass.selectedObjects.push(gltf.scene)
    // }
    if (instance.raycasterBool) {
      instance.Ray.push(gltf.scene)
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
  // if (instance.effectComposerBool) {
  //   instance.effectComposer.OutlinePass.selectedObjects.push(mesh)
  // }
  mesh.position.set(0, 0, 100)

  mesh.traverse((obj) => {
      if (obj.isMesh) {
        obj.ancestors = mesh
      }
    })
  instance.scene.add(mesh)
  if (instance.raycasterBool) {
    instance.Ray.push(mesh)
  }
}




function initRay() {
  const ray = new THREE.Ray()
  ray.origin = new THREE.Vector3(0, 0, 0)
  ray.direction = new THREE.Vector3(1, 1, 1).normalize()
  const p1 = new THREE.Vector3(100,0,0)
  const p2 = new THREE.Vector3(0,100,0)
  const p3 = new THREE.Vector3(0, 0, 100)
  const point = new THREE.Vector3()
  const res = ray.intersectTriangle(p1, p2, p3, false, point)
  console.log(res)
}



  (function init() {
    initMode()
    initMesh()
   // initRay()
  })()





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

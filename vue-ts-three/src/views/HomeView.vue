<script setup lang="ts">
import { ref,onMounted } from 'vue'
import CreateThree from '@/threeEdit/createThreeInstance'
import * as THREE from 'three'



const containerRef = ref()
const app = new CreateThree({
  helperBool: true,
  raycasterBool: true,
  sceneLabelBool: true,
  effectComposerBool: true,
  transformControlsBool: false
})

function initMode() {
  app.GLTFLoader.load('./finv/b.glb', (gltf) => {
    gltf.scene.position.set(100, 0, 60)
    gltf.scene.name = '大楼'

    gltf.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.ancestors = gltf.scene.name
      }
    })
    app.scene.add(gltf.scene)

    if (app.params.raycasterBool) {
      app.ray?.push(gltf.scene)
    }
  })

/*   app.GLTFLoader.load('./finv/c.glb', (gltf) => {
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
  }) */

 /*  app.GLTFLoader.load('./finv/d.glb', (gltf) => {
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
  }) */

}





function initMesh() {
  const geometry = new THREE.BoxGeometry(40, 40, 40);
  const geometry1 = new THREE.BoxGeometry(40, 60, 40);
  const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff, //设置材质颜色
      transparent: true,//开启透明
      // opacity: 0.5,//设置透明度
  });
  const mesh = new THREE.Mesh(geometry1, material)
  mesh.name = '长方体'
  mesh.position.set(0, 0, 0)

  const mesh2 = new THREE.Mesh(geometry, material)
  const group = new THREE.Group()
  group.position.set(100,0,0)
  mesh2.position.set(0, 0, 100)
  group.add(mesh2)
  group.name = 'group1'


  const mesh3 = new THREE.Mesh(geometry, material)
  mesh3.name = '正方体'
  mesh3.position.set(0, 0, 100)


  let ballGeometry = new THREE.SphereGeometry(26, 26, 26)
	const sphere = new THREE.Mesh(ballGeometry, material);
  sphere.position.set(0, 0, -80)
  sphere.name = '球'


  // 挂载 名称name ，减小数据量
  mesh.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh.name
    }
  })

  group.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = group.name
    }
  })

  mesh3.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = mesh3.name
    }
  })

  sphere.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.ancestors = sphere.name
    }
  })



  app.scene.add(mesh)
  // app.scene.add(group)
  app.scene.add(mesh3)
  app.scene.add(sphere)

//  test(mesh)
  // test(mesh2)
  console.log(mesh2.position)
  if (app.params.raycasterBool) {
    app.ray!.push(mesh)
    app.ray!.push(mesh3)
    app.ray!.push(sphere)
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

import * as THREE from 'three';
import type { CreateThreeInstanceType } from '@/threeEdit/type/threeInstance'
import { localParamsHook } from '@/threeEdit/util/localParams';

const { saveLocal } = localParamsHook();

export function auxOpeatorHook(app: CreateThreeInstanceType) {
  // 给模型重命名
  function rename(name: string, mesh: THREE.Object3D) {
    mesh.name = name;
  }

  // 给模型的下辈标记祖先
  function singChildAncestors(objs: THREE.Object3D) {
    const ancestorsName = objs.name;
    objs.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.name = ancestorsName;
      }
    });
  }

  // 添加进场景中
  function addInScene(mesh: THREE.Object3D) {
    app.scene.add(mesh);
  }

  function copyMesh(mesh: THREE.Object3D): THREE.Object3D {
    /*
      const mesh2 = mesh.clone();
      // 克隆几何体和材质，重新设置mesh2的材质和几何体属性
      mesh2.geometry = mesh.geometry.clone();
      mesh2.material = mesh.material.clone();
      // 改变mesh2颜色，不会改变mesh的颜色
      mesh2.material.color.set(0xff0000);
    */
    const newMesh: THREE.Object3D = mesh.clone()

    return newMesh
  }

  // 调试参数
  function debuggerParams(mesh: THREE.Object3D) {
    const name = mesh.name;
    const dirLoad = app.helper?.gui.addFolder(`${name}`);
    dirLoad?.add(mesh.position, 'x', -400, 400).step(1).onChange((value) => {
      saveLocal(name, 'position.x', value);
    }).name('posiotion x')
    dirLoad?.add(mesh.position, 'y', -400, 400).step(1).onChange((value) => {
      saveLocal(name, 'position.y', value);
    }).name('posioton y')
    dirLoad?.add(mesh.position, 'z', -400, 400).step(1).onChange((value) => {
      saveLocal(name, 'position.z', value);
    }).name('position z')

     dirLoad
       ?.add(mesh.rotation, 'x', -200, 200).step(0.1)
       .onChange((value) => {
         saveLocal(name, 'rotation.x', value);
       })
       .name('旋转 x');
     dirLoad
       ?.add(mesh.rotation, 'y', -200, 200).step(0.1)
       .onChange((value) => {
        saveLocal(name, 'rotation.y', value);
       })
       .name('旋转 y');
     dirLoad
       ?.add(mesh.rotation, 'z', -200, 200).step(0.1)
       .onChange((value) => {
        saveLocal(name, 'rotation.z', value);
       })
      .name('旋转 z');
       dirLoad?.close()
  }

  return {
    rename,
    singChildAncestors,
    addInScene,
    debuggerParams,
    copyMesh,
  };
}

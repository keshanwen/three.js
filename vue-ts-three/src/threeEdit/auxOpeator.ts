import * as THREE from 'three';
import type { CreateThreeInstanceType } from '@/threeEdit/type/threeInstance'
import { localParamsHook } from '@/threeEdit/localParams';

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

  // 调试参数
  function debuggerParams(mesh: THREE.Object3D) {
    const name = mesh.name;
    const dirLoad = app.helper?.gui.addFolder(`${name}`);
    dirLoad?.add(mesh.position, 'x', -200, 200).onChange((value) => {
      saveLocal(name, 'position.x', value);
    });
    dirLoad?.add(mesh.position, 'y', -200, 200).onChange((value) => {
      saveLocal(name, 'position.y', value);
    });
    dirLoad?.add(mesh.position, 'z', -200, 200).onChange((value) => {
      saveLocal(name, 'position.z', value);
    });
  }

  return {
    rename,
    singChildAncestors,
    addInScene,
    debuggerParams,
  };
}

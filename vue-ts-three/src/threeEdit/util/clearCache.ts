import * as THREE from 'three'
import type CreateThree from '@/threeEdit/createThreeInstance';

/*
  在开发3D场景时，若遇到需要动态添加删改模型、场景，页面切换重渲染时，为避免内存叠加占用，需要手动清除场景所占用的内存，避免溢出与资源浪费。

  dispose() 清除所有网格模型几何体顶点缓冲区占用的内存
  object.clear() 销毁模型对象，清除页面内存
  暂停 requestAnimationFrame() 方法，避免无意义运行
  清空 canvas画布，置空dom与相关元素

*/

function dispose(app: CreateThree) {
  // 移除场景中的所有光源
  // while (scene.children.length > 0) {
  //   const object: any = scene.children[0];

  //   if (object.isLight) {
  //     object.parent.remove(object);
  //   }

  //   disposeObject(object);
  // }
  app.scene.traverse((child: any) => {
    if (child.material) {
      child.material.dispose();
    }
    if (child.geometry) {
      child.geometry.dispose();
    }
    child = null;
  });
  app.renderer.dispose()
  app.scene.clear()
  app.camera.clear()
  app.scene.clear()
  app = null
}

function disposeObject(object: any) {
  if (object.isMesh) {
    // 释放几何体和材质
    const geometry = object.geometry;
    const material = object.material;

    geometry.dispose();
    material.dispose();

    if (Array.isArray(material)) {
      material.forEach((mat) => mat.dispose());
    }
  }

  // 移除自身
  if (object.parent) {
    object.parent.remove(object);
  }

  // 递归处理子对象
  object.traverse((child:any) => {
    disposeObject(child);
  });
}


export { dispose };
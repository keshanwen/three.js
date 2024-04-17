import * as THREE from 'three';

export function localParamsHook() {
  // 从本地数据中获取值
  function getLocal(name: string, key: string) {
    const localValue = localStorage.getItem(name);
    if (!localValue) {
      return false;
    }
    const res = key
      .split('.')
      .reduce((accu: any, curValue, curIndex, array) => {
        return accu[curValue];
      }, JSON.parse(localValue));
    return res;
  }

  // 将参数保存在本地
  function saveLocal(name: string, key: string, value: any) {
    let localValue = localStorage.getItem(name);
    if (localValue) {
      const objs = JSON.parse(localValue);
      key.split('.').reduce((accu: any, curValue, curIndex, array) => {
        if (curIndex === array.length - 1) {
          return (accu[curValue] = value);
        }
        if (!accu[curValue]) {
          accu[curValue] = {}
        }
        return accu[curValue];
      }, objs);
      localStorage.setItem(name, JSON.stringify(objs));
    } else {
      const obj = {};
      key.split('.').reduce((accu: any, curValue, curIndex, array) => {
        if (curIndex === array.length - 1) {
          return (accu[curValue] = value);
        }
        return (accu[curValue] = {});
      }, obj);
      localStorage.setItem(name, JSON.stringify(obj));
    }
  }

  // 设置参数
  function setMeshParams(key: string, value: any, objs: THREE.Object3D) {
    key.split('.').reduce((accu: any, curValue, curIndex, array) => {
      if (curIndex === array.length - 1) {
        // if (key.includes('rotation')) {
        //   if (curValue === 'x') {
        //     objs.rotateX(Math.PI * value / 360);
        //   } else if (curValue === 'y') {
        //     objs.rotateY((Math.PI * value) / 360);
        //   } else if (curValue === 'z') {
        //     objs.rotateZ((Math.PI * value) / 360);
        //   }
        // } else {
        //   return (accu[curValue] = value);
        // }
        return (accu[curValue] = value);
      }
      return accu[curValue];
    }, objs);
  }

  function setParams(mesh: THREE.Object3D, key: string, defineName?: string) {
    let { name } = mesh;
    if (defineName) name = defineName
    const localValue = getLocal(name, key);
    if (localValue || localValue === 0) {
      setMeshParams(key, localValue, mesh);
    }
  }


  return {
// getLocal,
    saveLocal,
    setParams
  };
}

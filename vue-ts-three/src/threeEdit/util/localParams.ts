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
        return (accu[curValue] = value);
      }
      return accu[curValue];
    }, objs);
  }

  function setParams(mesh: THREE.Object3D, key: string) {
    const { name } = mesh;
    const localValue = getLocal(name, key);
    if (localValue) {
      setMeshParams(key, localValue, mesh);
    }
  }


  return {
// getLocal,
    saveLocal,
    setParams
  };
}

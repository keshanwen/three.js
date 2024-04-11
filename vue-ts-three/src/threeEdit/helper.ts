import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import type {
  HelperType,
  CreateThreeInstanceType,
} from '@/threeEdit/type/threeInstance';


export default class Helper implements HelperType {
  stats: Stats;
  gui: GUI;
  constructor(instance: CreateThreeInstanceType) {
    instance.scene.add(new THREE.AxesHelper(200));

    this.stats = this.initStata();
    this.gui = this.initGui(instance)
  }
  initStata(): Stats {
    // 查看帧率
    const stats: Stats = new Stats();
    document.body.appendChild(stats.dom);
    return stats;
  }
  initGui(instance: CreateThreeInstanceType): GUI {
    // 辅助调试
    const gui: GUI = new GUI();
    gui.domElement.style.right = '0px';
    gui.domElement.style.width = '500px';
    gui.domElement.style.fontSize = '16px';
    // 平行光调试
    const dirFolder = this.gui.addFolder('平行光'); //创建一个子菜单
    dirFolder.add(instance.directionalLight, 'intensity', 0, 5);
    const R = 100;
    dirFolder
      .add({ angle: 45 }, 'angle', 0, 360)
      .onChange(function (v) {
        const rad = THREE.MathUtils.degToRad(v);
        instance.directionalLight.position.x = R * Math.cos(rad);
        instance.directionalLight.position.z = R * Math.sin(rad);
      })
      .name('旋转角度');

    dirFolder
      .add({ angle: 45 }, 'angle', 0, 89)
      .onChange(function (v) {
        const rad = THREE.MathUtils.degToRad(v);
        instance.directionalLight.position.y = R * Math.tan(rad);
      })
      .name('照射角度');

    dirFolder.close();

    return gui
  }
}
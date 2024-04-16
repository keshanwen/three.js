import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import type {
  HelperInstanceType,
  CreateThreeInstanceType,
} from '@/threeEdit/type/threeInstance';

export default class Helper implements HelperInstanceType {
  stats: Stats;
  gui: GUI;
  constructor(app: CreateThreeInstanceType) {
    this.initAxesHelper(app);
    this.stats = this.initStata();
    this.gui = this.initGui(app);
  }
  initAxesHelper(app: CreateThreeInstanceType) {
    app.scene.add(new THREE.AxesHelper(200));
  }
  initStata(): Stats {
    // 查看帧率
    const stats: Stats = new Stats();
    document.body.appendChild(stats.dom);
    return stats;
  }
  initGui(app: CreateThreeInstanceType): GUI {
    // 辅助调试
    const gui: GUI = new GUI();
    gui.domElement.style.right = '0px';
    gui.domElement.style.width = '500px';
    gui.domElement.style.fontSize = '20px';
    // 平行光调试

    const dirFolder = gui.addFolder('平行光'); //创建一个子菜单
    dirFolder.add(app.directionalLight, 'intensity', 0, 5);
    const R = 100;
    dirFolder
      .add({ angle: 45 }, 'angle', 0, 360)
      .onChange(function (v) {
        const rad = THREE.MathUtils.degToRad(v);
        app.directionalLight.position.x = R * Math.cos(rad);
        app.directionalLight.position.z = R * Math.sin(rad);
      })
      .name('旋转角度');

    dirFolder
      .add({ angle: 45 }, 'angle', 0, 89)
      .onChange(function (v) {
        const rad = THREE.MathUtils.degToRad(v);
        app.directionalLight.position.y = R * Math.tan(rad);
      })
      .name('照射角度');

    dirFolder.close();

    return gui;
  }
}

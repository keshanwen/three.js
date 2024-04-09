import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'


export default class Helper {
  constructor(scene, directionalLight) {
    scene.add(new THREE.AxesHelper(200));

    // 查看帧率
    this.stats = new Stats();
    document.body.appendChild(this.stats.domElement)
    // 辅助调试
    this.gui = new GUI()
    this.gui.domElement.style.right = '0px';
    this.gui.domElement.style.width = '500px';
    this.gui.domElement.style.fontSize = '16px';
    // 平行光调试
    const dirFolder = this.gui.addFolder('平行光');//创建一个子菜单
    dirFolder.add(directionalLight, 'intensity', 0, 5)
    const R = 100;
    dirFolder.add({ angle: 45 }, 'angle', 0, 360).onChange(function (v) {
      const rad = THREE.MathUtils.degToRad(v);
      directionalLight.position.x = R * Math.cos(rad);
      directionalLight.position.z = R * Math.sin(rad);
    }).name('旋转角度')

    dirFolder.add({ angle: 45 }, 'angle', 0, 89).onChange(function (v) {
      const rad = THREE.MathUtils.degToRad(v);
      directionalLight.position.y = R * Math.tan(rad);
    }).name('照射角度');

    dirFolder.close();
  }
}
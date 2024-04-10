import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import Helper from './helper'


class CreateThree {
  constructor(params = {}) {
    const { logPosTargetBool, width, height, helperBool = true } = params
    this.init(logPosTargetBool, width, height)
    if (helperBool) {
      this.helper = new Helper({
        scene: this.scene,
        directionalLight: this.directionalLight,
        camera: this.camera,
        renderer: this.renderer,
        controls: this.controls,
        render: (helperBool) => this.render(helperBool)
      });
      this.gui = this.helper.gui;
    }
    this.render(helperBool)
  }
  init(logPosTargetBool, width, height) {
    // 场景
    this.scene = new THREE.Scene();
    this.initWH(width,height)
    this.initCamera()
    this.initRenderer()
    this.initGLTF()
    this.initLight()
    this.initControls(logPosTargetBool)
    this.initListener()

  }
  initWH(width, height) {
    this.width = width || window.innerWidth - 4;
    this.height = height || window.innerHeight - 4;
  }
  initCamera() {
    // 相机
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 3000);
    this.camera.position.set(300, 150, 150);
  }
  initRenderer() {
    // 渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色和透明度
  }
  initGLTF() {
    // gltf加载
    const draco = new DRACOLoader();
    draco.setDecoderPath('./draco/');
    this.loader = new GLTFLoader()
    this.loader.setDRACOLoader(draco)
  }
  initLight() {
    // 平行光
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
    this.directionalLight.position.set(80, 100, 50);
    this.scene.add(this.directionalLight);
  }
  initControls(logPosTargetBool) {
    // 相机控件
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    // 开发调试参数
    if (logPosTargetBool) {
      this.controls.addEventListener('change', () => {
        console.log('camera.position', this.camera.position);
        console.log('controls.target', this.controls.target);
      })
    }

  }
  initListener() {
     // 画布尺寸随着窗口变化
    window.addEventListener('resize', () => {
      this.initWH()
      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
    });
  }
  render(helperBool) {
    // 循环渲染
    this.renderer.setAnimationLoop(() => {
      if (helperBool) {
        this.helper.stats.update()
      }
      this.renderer.render(this.scene, this.camera)
    })
  }
}






export default CreateThree
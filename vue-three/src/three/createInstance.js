import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'


class CreateThree {
  constructor(width, height) {
    this.init(width, height)
  }
  init(width,height) {
    // 场景
    this.scene = new THREE.Scene();
    this.initWH(width,height)
    this.initCamera()
    this.initRenderer()
    this.initGLTF()
    // 循环渲染
    this.renderer.setAnimationLoop(() => {
      this.renderer.render(this.scene, this.camera)
    })
    this.initLight()
    this.initControls()
    this.initAxesHelper()
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
  initControls() {
    // 相机控件
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }
  initAxesHelper() {
    const axesHelper = new THREE.AxesHelper(200)
    this.scene.add(axesHelper)
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

}






export default CreateThree
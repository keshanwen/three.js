import * as THREE from 'three'
import type { CreateThreeInstanceParamsType, CreateThreeInstanceType, HelperType, RayType,EffectComposerType } from '@/threeEdit/type/threeInstance'
import type {
  Scene,
  Camera,
  PerspectiveCamera as PerspectiveCameraType,
  DirectionalLight,
  WebGLRenderer,
} from 'three';
import {
  type GLTFLoader as GLTFLoaderType,
  type OrbitControls as OrbitControlsType,
  TransformControls,
  type EffectComposer,
} from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Helper from '@/threeEdit/helper';
import EffectComposerInstance from '@/threeEdit/effectComposer'
import Ray from '@/threeEdit/ray'

class CreateThree implements CreateThreeInstanceType {
  params: CreateThreeInstanceParamsType;
  scene: Scene;
  camera: PerspectiveCameraType;
  renderer: WebGLRenderer;
  GLTFLoader: GLTFLoaderType;
  directionalLight: DirectionalLight;
  orbitControls: OrbitControlsType;
  transformControls?: TransformControls | undefined;
  helper?: HelperType | undefined;
  effectComposer?: EffectComposerType | undefined;
  ray?: RayType | undefined;

  constructor(params: Partial<CreateThreeInstanceParamsType> = {}) {
    this.params = this.initParams(params);
    this.scene = new THREE.Scene();
    this.camera = this.initCamera();
    this.renderer = this.initRender();
    this.GLTFLoader = this.initGLTFLoader();
    this.directionalLight = this.initLight();
    this.orbitControls = this.initOrbitControls();
    this.initListener()
    if (this.params.helperBool) this.helper = new Helper(this);
    if (this.params.effectComposerBool) this.effectComposer = new EffectComposerInstance(this);
    this.render()
    if (this.params.raycasterBool)  this.ray = new Ray(this);
    if (this.params.transformControlsBool) this.initTransformControls()
  }
  private initParams(
    params: Partial<CreateThreeInstanceParamsType>
  ): CreateThreeInstanceParamsType {
    const defaultParams: CreateThreeInstanceParamsType = {
      width: window.innerWidth - 4,
      height: window.innerHeight - 4,
      logPosTargetBool: false,
      helperBool: false,
      effectComposerBool: false,
      raycasterBool: false,
      transformControlsBool: false,
    };
    return Object.assign(defaultParams, params);
  }
  private initCamera(): PerspectiveCameraType {
    const camera: PerspectiveCameraType = new THREE.PerspectiveCamera(
      45,
      this.params.width / this.params.height,
      0.1,
      3000
    );

    return camera;
  }
  private initRender(): WebGLRenderer {
    const renderer: WebGLRenderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
    });
    // 设置设备像素比，避免canvas 画布输出模糊
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.params.width, this.params.height);
    // 0xb9d3ff
    renderer.setClearColor(0x191970, 1); //设置背景颜色和透明度
    // renderer.outputEncoding = THREE.sRGBEncoding;
    return renderer;
  }
  private initGLTFLoader(): GLTFLoaderType {
    // gltf加载
    const draco = new DRACOLoader();
    draco.setDecoderPath('./draco/');
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    return loader;
  }
  private initLight(): DirectionalLight {
    // 平行光
    const directionalLight: DirectionalLight = new THREE.DirectionalLight(
      0xffffff,
      3.0
    );
    directionalLight.position.set(80, 100, 50);
    this.scene.add(directionalLight);
    return directionalLight;
  }
  private initOrbitControls(): OrbitControlsType {
    // 相机控件
    const orbitControls: OrbitControlsType = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );
    orbitControls.target.set(0, 0, 0);
    orbitControls.update();
    // 开发调试参数
    if (this.params.logPosTargetBool) {
      orbitControls.addEventListener('change', () => {
        console.log('camera.position', this.camera.position);
        console.log('orbitControls.target', this.orbitControls.target);
      });
    }

    return orbitControls;
  }
  private initWH() {
    this.params.width = window.innerWidth - 4
    this.params.height = window.innerHeight - 4
  }
  private initListener() {
    // 画布尺寸随着窗口变化
    window.addEventListener('resize', () => {
      this.initWH();
      this.renderer.setSize(this.params.width, this.params.height);
      this.camera.aspect = this.params.width / this.params.height;
      this.camera.updateProjectionMatrix();
    });
  }
  private initTransformControls() {
     this.transformControls = new TransformControls(
       this.camera,
       this.renderer.domElement
    );
    this.scene.add(this.transformControls)
    this.transformControls.addEventListener('mouseDown', () => {
      this.orbitControls.enabled = false
    });
    this.transformControls.addEventListener('mouseUp', () => {
      this.orbitControls.enabled = true;
    });
  }
  private render() {
    if (this.params.helperBool) {
      this.helper?.stats.update();
    }

    //  如果添加了后处理器，那么调用的 render 是后处理器的render
    if (this.params.effectComposerBool) {
      this.effectComposer?.effectComposer.render()
    } else {
      this.renderer.render(this.scene, this.camera)
    }
    window.requestAnimationFrame(() => this.render())
  }
}


export default CreateThree

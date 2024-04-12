import * as THREE from 'three'
import type { CreateThreeInstanceParamsType, CreateThreeInstanceType, HelperInstanceType, RayInstanceType,EffectComposerInstanceType } from '@/threeEdit/type/threeInstance'
import {
  TransformControls,
} from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Helper from '@/threeEdit/helper';
import EffectComposerInstance from '@/threeEdit/effectComposer'
import Ray from '@/threeEdit/ray'
// 引入CSS2渲染器CSS2DRenderer
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
// 引入CSS2模型对象CSS2DObject
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

class CreateThree implements CreateThreeInstanceType {
  params: CreateThreeInstanceParamsType;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  GLTFLoader: GLTFLoader;
  directionalLight: THREE.DirectionalLight;
  orbitControls: OrbitControls;
  transformControls?: TransformControls | undefined;
  helper?: HelperInstanceType | undefined;
  effectComposer?: EffectComposerInstanceType | undefined;
  ray?: RayInstanceType | undefined;
  css2Renderer?: CSS2DRenderer | undefined;

  constructor(params: Partial<CreateThreeInstanceParamsType> = {}) {
    this.params = this.initParams(params);
    this.scene = new THREE.Scene();
    this.camera = this.initCamera();
    this.renderer = this.initRender();
    this.GLTFLoader = this.initGLTFLoader();
    this.directionalLight = this.initLight();
    this.orbitControls = this.initOrbitControls();
    this.initListener();
    if (this.params.helperBool) this.helper = new Helper(this);
    if (this.params.effectComposerBool)
      this.effectComposer = new EffectComposerInstance(this);
    this.render();
    if (this.params.raycasterBool) this.ray = new Ray(this);
    if (this.params.transformControlsBool)
      this.transformControls = this.initTransformControls();
    if (this.params.sceneLabelBool) this.css2Renderer = this.initCSS2Renderer();
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
      sceneLabelBool: false,
    };
    return Object.assign(defaultParams, params);
  }
  private initCamera(): THREE.PerspectiveCamera {
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      45,
      this.params.width / this.params.height,
      0.1,
      3000
    );

    camera.position.set(300, 150, 150);
    return camera;
  }
  private initRender(): THREE.WebGLRenderer {
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
    });
    // 设置设备像素比，避免canvas 画布输出模糊
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.params.width, this.params.height);
    // 0xb9d3ff   66d3c0
    renderer.setClearColor(0x191970, 1); //设置背景颜色和透明度
    // renderer.outputEncoding = THREE.sRGBEncoding;
    return renderer;
  }
  private initGLTFLoader(): GLTFLoader {
    // gltf加载
    const draco = new DRACOLoader();
    draco.setDecoderPath('./draco/');
    const loader: GLTFLoader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    return loader;
  }
  private initLight(): THREE.DirectionalLight {
    // 平行光
    const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
      0xffffff,
      3.0
    );
    directionalLight.position.set(80, 100, 50);
    this.scene.add(directionalLight);
    return directionalLight;
  }
  private initOrbitControls(): OrbitControls {
    // 相机控件
    const orbitControls: OrbitControls = new OrbitControls(
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
    this.params.width = window.innerWidth - 4;
    this.params.height = window.innerHeight - 4;
  }
  private initListener() {
    // 画布尺寸随着窗口变化
    window.addEventListener('resize', () => {
      this.initWH();
      this.renderer.setSize(this.params.width, this.params.height);
      if (this.params.sceneLabelBool) {
        // HTML标签css2Renderer.domElement尺寸重新设置
        this.css2Renderer!.setSize(this.params.width, this.params.height);
      }
      this.camera.aspect = this.params.width / this.params.height;
      this.camera.updateProjectionMatrix();
    });
  }
  private initTransformControls(): TransformControls {
    const transformControls: TransformControls = new TransformControls(
      this.camera,
      this.renderer.domElement
    );
    this.scene.add(transformControls);
    transformControls.addEventListener('mouseDown', () => {
      this.orbitControls.enabled = false;
    });
    transformControls.addEventListener('mouseUp', () => {
      this.orbitControls.enabled = true;
    });

    return transformControls;
  }
  private render() {
    if (this.params.helperBool) {
      this.helper?.stats.update();
    }

    if (this.params.sceneLabelBool) {
      this.css2Renderer?.render(this.scene, this.camera);
    }

    //  如果添加了后处理器，那么调用的 render 是后处理器的render
    if (this.params.effectComposerBool) {
      this.effectComposer?.effectComposer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
    window.requestAnimationFrame(() => this.render());
  }
  append(parent: HTMLElement): void {
    parent.appendChild(this.renderer.domElement);
    if (this.params.sceneLabelBool) parent.appendChild(this.css2Renderer!.domElement);
  }

 private initCSS2Renderer() {
    // 创建一个CSS2渲染器CSS2DRenderer
    const css2Renderer = new CSS2DRenderer();

    // width, height：canvas画布宽高度
    css2Renderer.setSize(this.params.width, this.params.height);
    css2Renderer.domElement.style.position = 'absolute';
    // 避免renderer.domElement影响HTMl标签定位，设置top为0px
    css2Renderer.domElement.style.top = '0px';
    css2Renderer.domElement.style.left = '0px';
    //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    css2Renderer.domElement.style.pointerEvents = 'none';

    return css2Renderer
  }
}



export default CreateThree

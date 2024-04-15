import type {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Object3D,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// 引入渲染器通道RenderPass
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// 引入OutlinePass通道
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
// 引入CSS2渲染器CSS2DRenderer
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';





export interface CreateThreeInstanceParamsType {
  width: number; // canvas 宽
  height: number; // canvas 高
  logPosTargetBool: boolean; // 开发调试参数
  helperBool: boolean; // 是否开启调试工具
  effectComposerBool: boolean; // 后处理工具
  raycasterBool: boolean; // 射线模型
  transformControlsBool: boolean; // 是否拖动模型
  sceneLabelBool: boolean; // 是否场景标注
  CSS3DRenderer: Boolean; // 是否三维展示
}

export interface CreateThreeInstanceType {
  params: CreateThreeInstanceParamsType; // 初始化的参数
  scene: Scene; // 场景
  camera: PerspectiveCamera; // 相机
  renderer: WebGLRenderer; // 渲染器
  GLTFLoader: GLTFLoader; // 模型加载器
  directionalLight: DirectionalLight; // 光线
  orbitControls: OrbitControls; // 相机控件
  transformControls?: TransformControls; // 是否拖动模型
  helper?: HelperInstanceType; // 开发调试工具
  effectComposer?: EffectComposerInstanceType; // 后期处理通道
  ray?: RayInstanceType; // 射线处理器
  sceneLabel?: SceneLableInstanceType; // 标签文本展示label
  append(parent: HTMLElement): void; // 插入到对应的父节点中
}


export interface HelperInstanceType {
  stats: Stats; // 查看帧率
  gui: GUI; // gui 调试
}


export interface EffectComposerInstanceType {
  effectComposer: EffectComposer;
  renderPass: RenderPass;
  outlinePass: OutlinePass;
  render(): void;
}


export interface RayInstanceType {
  intersectObjects: Object3D[];
  chooseObj: undefined | null | Object3DHanlde;
  tag?: undefined | Object3D;
  push(object: Object3D): void;
}


export type Object3DHanlde = {
  ancestors: string
} & Object3D;


export interface SceneLableInstanceType {
  css2Renderer?: CSS2DRenderer;
  CSS3DRenderer?: CSS3DRenderer;
  createShowTag(
    content: string,
    mesh: Object3DHanlde,
    app: CreateThreeInstanceType
  ): Object3D;
}
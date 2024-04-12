// import * as THREE from 'three'
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



export interface CreateThreeInstanceParamsType {
  width: number; // canvas 宽
  height: number; // canvas 高
  logPosTargetBool: boolean; // 开发调试参数
  helperBool: boolean; // 是否开启调试工具
  effectComposerBool: boolean; // 后处理工具
  raycasterBool: boolean; // 射线模型
  transformControlsBool: boolean; // 是否拖动模型
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
  push(object: Object3D): void;
}


export type Object3DHanlde = {
  ancestors: Object3D
} & Object3D;

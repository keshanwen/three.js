import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// 引入渲染器通道RenderPass
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// 引入OutlinePass通道
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
// 引入UnrealBloomPass通道
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
// 引入GlitchPass通道
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
// 伽马校正后处理Shader
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js';
// ShaderPass功能：使用后处理Shader创建后处理通道
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
// FXAA抗锯齿Shader
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
// SMAA抗锯齿通道
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';



export default class EffectComposerInstance {
  constructor(params) {
    const { scene, camera, renderer, width,height } = params
    // 创建后期处理对象EffectComposer, WebGL 渲染器作为参数
    this.composer = new EffectComposer(renderer)
    this.renderPass = new RenderPass(scene, camera)
    this.composer.addPass(this.renderPass)
    // outlinePass 的第一个参数v2 的尺寸和 canvas 画布保持一致
    const v2 = new THREE.Vector2(width, height)
    this.OutlinePass = new OutlinePass(v2, scene, camera)
    // 设置 OutlinePss 通道
    this.composer.addPass(this.OutlinePass)
    // this.unrealBloomPass = new UnrealBloomPass(new THREE.Vector2(width, height))
    // this.unrealBloomPass.strength = 10
    // this.glitPass = new GlitchPass()
    // 设置glitPass 通道
    // this.composer.addPass(this.glitPass)
    // this.setOutlineStyle()

    // 创建颜色较正通道
    const gammaPass = new ShaderPass(GammaCorrectionShader)
    this.composer.addPass(gammaPass)

    this.setPass(renderer, width, height)
  }
  setPass(renderer, width,height) {
    const FXAAPass = new ShaderPass(FXAAShader)
    const pixelRatio = renderer.getPixelRatio();//获取设备像素比
    // width、height是canva画布的宽高度
    // FXAAPass.uniforms.resolution.value.x = 1 / (width * pixelRatio);
    // FXAAPass.uniforms.resolution.value.y = 1 / (height * pixelRatio);
    // this.composer.addPass(FXAAPass)
    // width、height是canva画布的宽高度
    const smaaPass = new SMAAPass(width * pixelRatio, height * pixelRatio);
    this.composer.addPass(smaaPass);
  }
  setOutlineStyle() {
    //模型描边颜色，默认白色
     this.OutlinePass.visibleEdgeColor.set(0xcc3300);
    //高亮发光描边厚度
     this.OutlinePass.edgeThickness = 4;
    //高亮描边发光强度
    this.OutlinePass.edgeStrength = 6;
    //模型闪烁频率控制，默认0不闪烁
    this.OutlinePass.pulsePeriod = 2;

  }
  render() {
    this.composer.render()
    window.requestAnimationFrame(() => this.render())
  }
}
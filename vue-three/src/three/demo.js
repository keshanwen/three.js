// ShaderPass功能：使用后处理Shader创建后处理通道
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
// FXAA抗锯齿Shader
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';





const FXAAPass = new ShaderPass(FXAAShader);
// `.getPixelRatio()`获取`renderer.setPixelRatio()`设置的值
const pixelRatio = renderer.getPixelRatio();//获取设备像素比
// width、height是canva画布的宽高度
FXAAPass.uniforms.resolution.value.x = 1 / (width * pixelRatio);
FXAAPass.uniforms.resolution.value.y = 1 / (height * pixelRatio);
composer.addPass(FXAAPass);


//获取.setPixelRatio()设置的设备像素比
const pixelRatio = renderer.getPixelRatio();
// width、height是canva画布的宽高度
const smaaPass = new SMAAPass(width * pixelRatio, height * pixelRatio);
composer.addPass(smaaPass);

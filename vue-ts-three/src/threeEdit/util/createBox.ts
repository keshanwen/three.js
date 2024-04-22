import * as THREE from 'three'
import type {
  Object3D,
} from 'three';
import TWEEN from '@tweenjs/tween.js';


export function createBox(mesh: THREE.Object3D) {
    const box = new THREE.Box3();
    box.setFromObject(mesh);
    const size = new THREE.Vector3();
    box.getSize(size);
    var center = new THREE.Vector3();
    box.getCenter(center);

  return {
    size,
    center
  }
}

export function createSprite(mesh: Object3D) {
  const textLoader = new THREE.TextureLoader();
  let texture = textLoader.load('./kebi.jpg');
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
  });

  const tag = new THREE.Sprite(spriteMaterial);

  // 控制精灵大小
  tag.scale.set(40, 40, 40);

  const { size, center } = createBox(mesh);
  const OFFSET = 30;
  // 简单的判断
  if (center.y == 0) {
    tag.position.y = size.y / 2 + OFFSET;
  } else {
    tag.position.y = size.y + OFFSET;
  }

  return tag;
}

// 生成一个canvas对象，标注文字为参数name
function createCanvas(name: string):HTMLCanvasElement {
  /**
   * 创建一个canvas对象，绘制几何图案或添加文字
   */
  const canvas = document.createElement('canvas');
  const arr = name.split(''); //分割为单独字符串
  let num = 0;
  const reg = /[\u4e00-\u9fa5]/;
  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      //判断是不是汉字
      num += 1;
    } else {
      num += 0.5; //英文字母或数字累加0.5
    }
  }
  // 根据字符串符号类型和数量、文字font-size大小来设置canvas画布宽高度
  const h = 80; //根据渲染像素大小设置，过大性能差，过小不清晰
  const w = h + num * 32;
  canvas.width = w;
  canvas.height = h;
  const h1 = h * 0.8;
  const c: CanvasRenderingContext2D = canvas.getContext('2d')!;
  // 定义轮廓颜色，黑色半透明
  c.fillStyle = 'rgba(0,0,0,0.5)';
  // 绘制半圆+矩形轮廓
  const R = h1 / 2;
  c.arc(R, R, R, -Math.PI / 2, Math.PI / 2, true); //顺时针半圆
  c.arc(w - R, R, R, Math.PI / 2, -Math.PI / 2, true); //顺时针半圆
  c.fill();
  // 绘制箭头
  c.beginPath();
  const h2 = h - h1;
  c.moveTo(w / 2 - h2 * 0.6, h1);
  c.lineTo(w / 2 + h2 * 0.6, h1);
  c.lineTo(w / 2, h);
  c.fill();
  // 文字
  c.beginPath();
  c.translate(w / 2, h1 / 2);
  c.fillStyle = '#ffffff'; //文本填充颜色
  c.font = 'normal 32px 宋体'; //字体样式设置
  c.textBaseline = 'middle'; //文本与fillText定义的纵坐标
  c.textAlign = 'center'; //文本居中(以fillText定义的横坐标)
  c.fillText(name, 0, 0);
  return canvas;
}

export function createCanvasSprite(mesh: Object3D,name: string) {
  const canvas = createCanvas(name); //创建一个canvas画布
  // canvas画布作为CanvasTexture的参数创建一个纹理对象
  const texture = new THREE.CanvasTexture(canvas);
  const spriteMaterial = new THREE.SpriteMaterial({
    map: texture,
  });
  const sprite = new THREE.Sprite(spriteMaterial);
  // 控制精灵大小(sprite宽高比和canvas画布保持一致)
  const s = 0.05; //通过canvas宽高度缩放后，设置sprite.scale，避免图文宽高比变形
  const x = canvas.width * s;
  const y = canvas.height * s;

  sprite.scale.set(12, 12, 6);
  // sprite.position.y = y / 2; //标签底部箭头和空对象标注点重合

   const { size, center } = createBox(mesh);
   const OFFSET = 10;
   // 简单的判断
   if (center.y == 0) {
     sprite.position.y = size.y / 2 + OFFSET;
   } else {
     sprite.position.y = size.y + OFFSET;
   }

  return sprite
}


export function createTween(args: any) {
  const tween = new TWEEN.Tween(args);

  return tween;
}


// 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态
// pos: 三维向量Vector3，表示动画结束相机位置
// target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点
function createCameraTween(endPos: any,endTarget: any, camera: any, controls: any){
    new TWEEN.Tween({
        // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        tx: controls.target.x,
        ty: controls.target.y,
        tz: controls.target.z,
    })
    .to({
        // 动画结束相机位置坐标
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        // 动画结束相机指向的目标观察点
        tx: endTarget.x,
        ty: endTarget.y,
        tz: endTarget.z,
    }, 2000)
    .onUpdate(function (obj) {
        // 动态改变相机位置
        camera.position.set(obj.x, obj.y, obj.z);
        // 动态计算相机视线
        // camera.lookAt(obj.tx, obj.ty, obj.tz);
        controls.target.set(obj.tx, obj.ty, obj.tz);
        controls.update();//内部会执行.lookAt()
    })
    .start();
}

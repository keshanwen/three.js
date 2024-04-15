// 引入CSS2渲染器CSS2DRenderer
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
// 引入CSS2模型对象CSS2DObject
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import type {
  CreateThreeInstanceType,
  RayInstanceType,
  SceneLableInstanceType,
} from '@/threeEdit/type/threeInstance';
import type { Object3DHanlde } from '@/threeEdit/type/threeInstance';
import type { Object3D } from 'three';
import { createBox } from '@/threeEdit/util/createBox';
// 引入CSS3渲染器CSS3DRenderer
import {CSS3DObject, CSS3DRenderer} from 'three/addons/renderers/CSS3DRenderer.js';


export default class SecebLabelInstance implements SceneLableInstanceType {
  css2Renderer?: CSS2DRenderer;
  CSS3DRenderer?: CSS3DRenderer;
  constructor(app: CreateThreeInstanceType) {
    if (app.params.CSS3DRenderer) {
      this.CSS3DRenderer = this.initCSS3DRenderer(app)
    } else {
      this.css2Renderer = this.initCSS2Renderer(app);
    }
  }

  initCSS2Renderer(app: CreateThreeInstanceType): CSS2DRenderer {
    // 创建一个CSS2渲染器CSS2DRenderer
    const css2Renderer = new CSS2DRenderer();

    // width, height：canvas画布宽高度
    css2Renderer.setSize(app.params.width, app.params.height);
    css2Renderer.domElement.style.position = 'absolute';
    // 避免renderer.domElement影响HTMl标签定位，设置top为0px
    css2Renderer.domElement.style.top = '0px';
    css2Renderer.domElement.style.left = '0px';
    //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    css2Renderer.domElement.style.pointerEvents = 'none';

    return css2Renderer;
  }


  initCSS3DRenderer(app: CreateThreeInstanceType): CSS3DRenderer {
    // 创建一个CSS2渲染器CSS2DRenderer
    const css3DRenderer = new CSS3DRenderer();

    // width, height：canvas画布宽高度
    css3DRenderer.setSize(app.params.width, app.params.height);
    css3DRenderer.domElement.style.position = 'absolute';
    // 避免renderer.domElement影响HTMl标签定位，设置top为0px
    css3DRenderer.domElement.style.top = '0px';
    css3DRenderer.domElement.style.left = '0px';
    //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    css3DRenderer.domElement.style.pointerEvents = 'none';

    return css3DRenderer;
  }


  createShowTag(
    content: string,
    mesh: Object3DHanlde,
    app: CreateThreeInstanceType
  ): Object3D {
    // 创建 html 元素
    const div = document.createElement('div');
    div.innerHTML = `${content}`;
    div.style.padding = '10px';
    div.style.color = '#fff';
    div.style.backgroundColor = 'rgba(25,25,25,0.5)';
    div.style.borderRadius = '5px';

    // HTML元素转化为threejs的CSS2模型对象
    let tag: CSS2DObject | CSS3DObject;
    if (app.params.CSS3DRenderer) {
      tag = new CSS3DObject(div);
    } else {
      tag = new CSS2DObject(div);
    }
    // tag.position.y += 40; // 待优化

    // app.scene.add(tag)
    const { size, center } = createBox(mesh);
    const OFFSET = 10;
    // 简单的判断
    if (center.y == 0) {
      tag.position.y = size.y / 2 + OFFSET;
    } else {
      tag.position.y = size.y + OFFSET;
    }
    // tag.position.y = size.y - center.y;

    return tag;
  }
}
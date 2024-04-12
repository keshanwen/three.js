// 引入CSS2渲染器CSS2DRenderer
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
// 引入CSS2模型对象CSS2DObject
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import type {
  CreateThreeInstanceType,
  RayInstanceType,
} from '@/threeEdit/type/threeInstance';

export default class SecebLabel {
  constructor(app: CreateThreeInstanceType) {
    this.test(app)
  }
  test(app: CreateThreeInstanceType) {
    const div = document.createElement('div');
    div.innerText = 'hello wrold';

    // HTML元素转化为threejs的CSS2模型对象
    const tag = new CSS2DObject(div);

    tag.position.set(100, 0, 0)


  }
  demo() {


  }
}
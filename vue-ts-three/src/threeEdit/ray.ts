import * as THREE from 'three';
import type {
  CreateThreeInstanceType,
  RayInstanceType,
} from '@/threeEdit/type/threeInstance';
import type { Object3DHanlde } from '@/threeEdit/type/threeInstance';
import { createSprite, createCanvasSprite } from '@/threeEdit/util/createBox';
import { createBox } from '@/threeEdit/util/createBox';


export default class Ray implements RayInstanceType {
  intersectObjects: THREE.Object3D[];
  chooseObj: undefined | null | Object3DHanlde;
  tag: THREE.Object3D | undefined;

  constructor(app: CreateThreeInstanceType) {
    this.intersectObjects = [];
    this.chooseObj = null;
    this.tag = undefined;
    this.listenerClick(app);
  }

  listenerClick(app: CreateThreeInstanceType) {
    /*
      射线拾取网格模型步骤
      1. 坐标转化（鼠标单击的屏幕坐标转标准设备坐标）
      2. 射线计算（通过鼠标单击位置 + 相机参数计算射线值）
      3. 射线交叉计算
    */
    app.renderer.domElement.addEventListener('click', (event) => {
      // .offsetY、.offsetX以canvas画布左上角为坐标原点,单位px
      const px = event.offsetX;
      const py = event.offsetY;
      //屏幕坐标px、py转WebGL标准设备坐标x、y
      //width、height表示canvas画布宽高度
      const x = (px / app.params.width) * 2 - 1;
      const y = -(py / app.params.height) * 2 + 1;
      //创建一个射线投射器`Raycaster`
      const raycaster = new THREE.Raycaster();
      //.setFromCamera()计算射线投射器`Raycaster`的射线属性.ray
      // 形象点说就是在点击位置创建一条射线，射线穿过的模型代表选中
      raycaster.setFromCamera(new THREE.Vector2(x, y), app.camera);
      //.intersectObjects([mesh1, mesh2, mesh3])对参数中的网格模型对象进行射线交叉计算
      // 未选中对象返回空数组[],选中一个对象，数组1个元素，选中两个对象，数组两个元素
      const intersects = raycaster.intersectObjects(this.intersectObjects);
      // console.log("射线器返回的对象", intersects);
      // intersects.length大于0说明，说明选中了模型
      console.log('点中的对象', intersects);

      if (intersects.length > 0) {
        if (this.tag?.parent) {
          this.tag.parent.remove(this.tag)
        }
        let ancestors: string = (intersects[0].object as Object3DHanlde)
          .ancestors;
        this.chooseObj = app.scene.getObjectByName(ancestors) as Object3DHanlde;
        console.log(this.chooseObj, 'chooseObj~~~~~~~~~~~~~~~~~')
        if (app.params.effectComposerBool && this.chooseObj) {
         // app.effectComposer!.outlinePass.selectedObjects = [this.chooseObj];
        }
        if (app.params.transformControlsBool && this.chooseObj) {
          // app.transformControls?.attach(this.chooseObj);
        }
        if (app.params.sceneLabelBool && this.chooseObj) {

          if (ancestors === '球') {
           this.tag = createSprite(this.chooseObj)
            // this.tag = createCanvasSprite(this.chooseObj,'你好世界')
          } else {
              //  this.tag = app.sceneLabel!.createShowTag(
              //    ancestors,
              //    this.chooseObj,
              //    app
            //  );
            this.tag = app.sceneLabel!.cretateShowTagComponent(app)
          }

          // this.chooseObj.add(this.tag);
          const position = this.confirmTagPosition(this.chooseObj)
          const { x, y, z } = position
          const COUNT = 12
          this.tag.position.set(x + COUNT, y + COUNT, z + COUNT)

          // this.tag.translateX(30)
          app.scene.add(this.tag)

        }
      } else {
        if (this.chooseObj) {
          // app.effectComposer!.outlinePass.selectedObjects = [];
          if (this.tag) {
            //  this.tag.parent.remove(this.tag);
            app.scene.remove(this.tag)
          }
        }
      }
    });
  }

  confirmTagPosition(chooseObj: THREE.Object3D) {
    const { size } = createBox(chooseObj)
    const { y: height } = size
    const { x, y, z } = chooseObj.position

    return {
      x,
      y: height + y,
      z,
    }
  }

  push(object: THREE.Object3D): void {
    this.intersectObjects.push(object);
  }
}

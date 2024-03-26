import { scene } from './scene/index.js'//Three.js三维场景
import { renderer, camera } from './RendererCamera.js'//渲染器对象和相机对象
import { labelRenderer } from './scene/tag.js' // HTML 标签相关代码
import { choose } from './choose.js' // 执行射线拾取的代码


// 渲染循环
function render() {
  labelRenderer.render(scene, camera)
  renderer.render(scene, camera); //执行渲染操作
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
   // console.log(camera.position);//通过相机控件OrbitControls旋转相机，选择一个合适场景渲染角度
}
render();

export {renderer}

import { scene } from './index'
import { renderer, camera, controls } from './RendereCamera'
import { mesh } from './mesh'


// 渲染循环
function render() {
 // mesh.rotateY(0.01);//mesh绕y轴旋转动画
  renderer.render(scene, camera); //执行渲染操作
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  // console.log(controls.target)
}
render();

export { renderer }

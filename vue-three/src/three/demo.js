/* 射线拾取网格模型步骤
1.坐标转化(鼠标单击的屏幕坐标转标准设备坐标)

2.射线计算(通过鼠标单击位置 + 相机参数计算射线值)

3.射线交叉计算 */

const cunchu = model.getObjectByName('存储罐');
// 射线拾取模型对象(包含多个Mesh)
// 可以给待选对象的所有子孙后代Mesh，设置一个祖先属性ancestors,值指向祖先(待选对象)
for (let i = 0; i < cunchu.children.length; i++) {
  const group = cunchu.children[i];
  //递归遍历chooseObj，并给chooseObj的所有子孙后代设置一个ancestors属性指向自己
  group.traverse(function (obj) {
    if (obj.isMesh) {
      obj.ancestors = group;
    }
  })
}
// 射线交叉计算拾取模型
const intersects = raycaster.intersectObjects(cunchu.children);
console.log('intersects', intersects);
if (intersects.length > 0) {
  // 通过.ancestors属性判断那个模型对象被选中了
  outlinePass.selectedObjects = [intersects[0].object.ancestors];
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


addEventListener('click', function (event) {
  const px = event.offsetX;
  const py = event.offsetY;
  //屏幕坐标转标准设备坐标
  const x = (px / window.innerWidth) * 2 - 1;
  const y = -(py / window.innerHeight) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  //.setFromCamera()在点击位置生成raycaster的射线ray
  raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
  const cunchu = model.getObjectByName('存储罐');
  // 射线拾取模型对象(包含多个Mesh)
  // 可以给待选对象的所有子孙后代Mesh，设置一个祖先属性ancestors,值指向祖先(待选对象)
  for (let i = 0; i < cunchu.children.length; i++) {
    const group = cunchu.children[i];
    //递归遍历chooseObj，并给chooseObj的所有子孙后代设置一个ancestors属性指向自己
    group.traverse(function (obj) {
      if (obj.isMesh) {
        obj.ancestors = group;
      }
    })
  }
  // 射线交叉计算拾取模型
  const intersects = raycaster.intersectObjects(cunchu.children);
  console.log('intersects', intersects);
  if (intersects.length > 0) {
    // 通过.ancestors属性判断那个模型对象被选中了
    outlinePass.selectedObjects = [intersects[0].object.ancestors];
  }
})

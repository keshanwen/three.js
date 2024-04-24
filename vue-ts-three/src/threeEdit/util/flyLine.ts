import * as THREE from 'three'


var model = new THREE.Group(); //声明一个组对象
/**
 * 创建线条模型
 */
var geometry = new THREE.BufferGeometry(); //创建一个缓冲类型几何体
// 三维样条曲线
var curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(100, 0, -100),
  new THREE.Vector3(0, 80, 0),
  new THREE.Vector3(-100, 0, 100),
]);
//曲线上等间距返回多个顶点坐标
var points = curve.getSpacedPoints(100); //分段数100，返回101个顶点
// setFromPoints方法从points中提取数据赋值给attributes.position
geometry.setFromPoints(points);
var material = new THREE.LineBasicMaterial({
  color: 0x006666, //轨迹颜色
});
//线条模型对象
var line = new THREE.Line(geometry, material);
model.add(line);

var index = 20; //取点索引位置
var num = 15; //从曲线上获取点数量
var points2 = points.slice(index, index + num); //从曲线上获取一段
var curve = new THREE.CatmullRomCurve3(points2);
var newPoints2 = curve.getSpacedPoints(100); //获取更多的点数
var geometry2 = new THREE.BufferGeometry();
geometry2.setFromPoints(newPoints2);
// 每个顶点对应一个百分比数据attributes.percent 用于控制点的渲染大小
var percentArr = []; //attributes.percent的数据
for (var i = 0; i < newPoints2.length; i++) {
  percentArr.push(i / newPoints2.length);
}
var percentAttribue = new THREE.BufferAttribute(
  new Float32Array(percentArr),
  1
);
geometry2.attributes.percent = percentAttribue;
// 批量计算所有顶点颜色数据
var colorArr = [];
for (var i = 0; i < newPoints2.length; i++) {
  var color1 = new THREE.Color(0x006666); //轨迹线颜色 青色
  var color2 = new THREE.Color(0xffff00); //黄色
  var color = color1.lerp(color2, i / newPoints2.length);
  colorArr.push(color.r, color.g, color.b);
}
// 设置几何体顶点颜色数据
geometry2.attributes.color = new THREE.BufferAttribute(
  new Float32Array(colorArr),
  3
);

// 点模型渲染几何体每个顶点
var PointsMaterial = new THREE.PointsMaterial({
  // color: 0xffff00,
  size: 5.0, //点大小
  // vertexColors: THREE.VertexColors, //使用顶点颜色渲染
});
var flyPoints = new THREE.Points(geometry2, PointsMaterial);
model.add(flyPoints);
// 修改点材质的着色器源码(注意：不同版本细节可能会稍微会有区别，不过整体思路是一样的)
PointsMaterial.onBeforeCompile = function (shader) {
  // 顶点着色器中声明一个attribute变量:百分比
  shader.vertexShader = shader.vertexShader.replace(
    'void main() {',
    [
      'attribute float percent;', //顶点大小百分比变量，控制点渲染大小
      'void main() {',
    ].join('\n') // .join()把数组元素合成字符串
  );
  // 调整点渲染大小计算方式
  shader.vertexShader = shader.vertexShader.replace(
    'gl_PointSize = size;',
    ['gl_PointSize = percent * size;'].join('\n') // .join()把数组元素合成字符串
  );
};
// 飞线动画
var indexMax = points.length - num; //飞线取点索引范围
function animation() {
  if (index > indexMax) index = 0;
  index += 1;
  points2 = points.slice(index, index + num); //从曲线上获取一段
  var curve = new THREE.CatmullRomCurve3(points2);
  var newPoints2 = curve.getSpacedPoints(100); //获取更多的点数
  geometry2.setFromPoints(newPoints2);

  requestAnimationFrame(animation);
}
animation();

plane(); //设置一个地面
function plane() {
  var gridHelper = new THREE.GridHelper(300, 15, 0x003333, 0x003333);
  model.add(gridHelper);
  var geometry = new THREE.PlaneGeometry(310, 310);
  var material = new THREE.MeshLambertMaterial({
    // map: texture,
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
    side: THREE.DoubleSide,
  });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 1;
  model.add(mesh);
  mesh.rotateX(-Math.PI / 2);
}

export { model };

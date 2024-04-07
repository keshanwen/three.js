import * as THREE from 'three'

/* const geometry = new THREE.BufferGeometry()
const R = 100
const N = 100
const sp = 2 * Math.PI / N;

const arr = []
// 设置圆心坐标
const cx = 0
const cy = 0
for (let i = 0; i < N;i++) {
  const angle = sp * i
  const x = R * Math.cos(angle) + cx
  const y = R * Math.sin(angle) + cy
  arr.push(x,y,0)
}

const vertices = new Float32Array(arr)

const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute


const material = new THREE.LineBasicMaterial({
  color: 0xff0000 //线条颜色
})


//const line = new THREE.Line(geometry, material)
const line = new THREE.LineLoop(geometry, material)
 */


// const geometry = new THREE.BufferGeometry()


// const geometry = new THREE.Geometry()

// 参数1和2表示椭圆中心坐标  参数3和4表示x和y方向半径
// const arc = new THREE.EllipseCurve(0, 0, 100, 50);
// 参数1和2表示椭圆中心坐标  参数3和4表示x和y方向半径
//const arc = new THREE.EllipseCurve(0, 0, 100, 50);
// 参数1和2表示椭圆中心坐标  参数3和4表示x和y方向半径
//const arc = new THREE.EllipseCurve(0, 0, 50, 50);
//参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
// const arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
// 半圆弧
// const arc = new THREE.ArcCurve(0, 0, 100, 0, Math.PI);
// 四分之一圆弧
// const arc = new THREE.ArcCurve(0, 0, 100, 0, Math.PI / 2);
// const arc = new THREE.ArcCurve(0, 0, 100, 0, Math.PI / 2, false);
// const arc = new THREE.ArcCurve(0, 0, 100, 0, Math.PI / 2, true);


// var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
// var points = arc.getPoints(50); // 可以从曲线上获取顶点数据。获取点的方式并不是按照曲线等间距的方式，而是会考虑曲线斜率变化，斜率变化快的位置返回的顶点更密集。
// var points = arc.getSpacedPoints(50); // 按照曲线长度等间距返回顶点数据



// geometry.setFromPoints(points);// 赋值给 geometry.attribute.position 属性

// const material = new THREE.LineBasicMaterial({
//   color: 0xff0000
// })

// const line = new THREE.Line(geometry, material)

// const materials = new THREE.PointsMaterial({
//   color: 0xff0000,
//   size: 4.0 //点对象像素尺寸
// })

// const point = new THREE.Points(geometry, materials)


// 三维向量Vector3创建一组顶点坐标
// const arr = [
//   new THREE.Vector3(-50, 20, 90),
//   new THREE.Vector3(-10, 40, 40),
//   new THREE.Vector3(0, 0, 0),
//   new THREE.Vector3(60, -60, 0),
//   new THREE.Vector3(70, 0, 80)
// ]

// // 三维样条曲线
// const curv = new THREE.CatmullRomCurve3(arr)

// // 从曲线上获取点
// const pointsArr = curv.getPoints(100)

// const geometry = new THREE.BufferGeometry()

// // 读取坐标数据赋给几何体顶点
// geometry.setFromPoints(pointsArr)

// // 线材质
// const material = new THREE.LineBasicMaterial({
//   color: 0x00fffff
// })

// // 线模型
// const line = new THREE.Line(geometry, material)


// // 用点模型可视化样条曲线经过的顶点位置
// const geometry2 = new THREE.BufferGeometry();
// geometry2.setFromPoints(arr);
// const material2 = new THREE.PointsMaterial({
//   color: 0xff00ff,
//   size: 10,
// });
// //点模型对象
// const points = new THREE.Points(geometry2, material2);


// // 二维向量Vector2创建一组顶点坐标
// const arrs = [
//   new THREE.Vector2(-100, 0),
//   new THREE.Vector2(0, 30),
//   new THREE.Vector2(100, 0),
// ];
// // 二维样条曲线
// const curve = new THREE.SplineCurve(arrs);

// const geometry3 = new THREE.BufferGeometry()
// geometry3.setFromPoints(curve.getPoints(100))
// const line3 = new THREE.Line(geometry3, material)

// p1、p2、p3表示三个点坐标
// p1、p3是曲线起始点，p2是曲线的控制点
// const p1 = new THREE.Vector2(-80, 0);
// const p2 = new THREE.Vector2(20, 100);
// const p3 = new THREE.Vector2(80, 0);

// // 二维二次贝赛尔曲线
// const curve = new THREE.QuadraticBezierCurve(p1, p2, p3);

// const pointsArr = curve.getPoints(100); //曲线上获取点
// const geometry = new THREE.BufferGeometry();
// geometry.setFromPoints(pointsArr); //读取坐标数据赋值给几何体顶点
// const material = new THREE.LineBasicMaterial({ color: 0x00fffff });
// const line = new THREE.Line(geometry, material);


// const geometry2 = new THREE.BufferGeometry();
// geometry2.setFromPoints([p1, p2, p3]);
// const material2 = new THREE.PointsMaterial({
//   color: 0xff00ff,
//   size: 10,
// });
// //点模型对象
// const points = new THREE.Points(geometry2, material2);
// // 三个点构成的线条
// const line2 = new THREE.Line(geometry2, new THREE.LineBasicMaterial({
//   color: 0x00fffff
// }));

// p1、p2、p3表示三个点坐标
// const p1 = new THREE.Vector3(-80, 0, 0);
// const p2 = new THREE.Vector3(20, 100, 0);
// const p3 = new THREE.Vector3(80, 0, 100);
// // 三维二次贝赛尔曲线
// const curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);

// p1、p2、p3、p4表示4个点坐标
// p1、p4是曲线起始点，p2、p3是曲线的控制点
// const p1 = new THREE.Vector2(-80, 0);
// const p2 = new THREE.Vector2(-40, 50);
// const p3 = new THREE.Vector2(50, 50);
// const p4 = new THREE.Vector2(80, 0);

// // 二维三次贝赛尔曲线
// const curve = new THREE.CubicBezierCurve(p1, p2, p3, p4);

// const p1 = new THREE.Vector3(-80, 0, 0);
// const p2 = new THREE.Vector3(-40, 50, 0);
// const p3 = new THREE.Vector3(50, 50, 0);
// const p4 = new THREE.Vector3(80, 0, 100);
// // 三维三次贝赛尔曲线
// const curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4);





// // p1、p3轨迹线起始点坐标
// const p1 = new THREE.Vector3(-100, 0, -100);
// const p3 = new THREE.Vector3(100, 0, 100);
// // 计算p1和p3的中点坐标
// const x2 = (p1.x + p3.x) / 2;
// const z2 = (p1.z + p3.z) / 2;
// const h = 50;
// const p2 = new THREE.Vector3(x2, h, z2);

// const arr = [p1, p2, p3];
// // 三维样条曲线
// const curve = new THREE.CatmullRomCurve3(arr);
// p1、p3轨迹线起始点坐标
// const p1 = new THREE.Vector3(-100, 0, -100);
// const p3 = new THREE.Vector3(100, 0, 100);
// // 计算p1和p3的中点坐标
// const x2 = (p1.x + p3.x) / 2;
// const z2 = (p1.z + p3.z) / 2;
// const h = 100;
// const p2 = new THREE.Vector3(x2, h, z2);
// // 三维二次贝赛尔曲线
// const curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);



// const geometry = new THREE.BufferGeometry()
// geometry.setFromPoints(curve.getPoints())

// const material = new THREE.LineBasicMaterial({ color: 0x00fffff });

// const line = new THREE.Line(geometry, material)

// const R = 80;//圆弧半径
// const H = 200;//直线部分高度

// const line1 = new THREE.LineCurve(new THREE.Vector2(R, H), new THREE.Vector2(R, 0))
// const line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0), new THREE.Vector2(-R, H))
// const arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true)

// const CurvePath = new THREE.CurvePath()

// CurvePath.curves.push(line1, arc, line2)


// const pointsArr = CurvePath.getPoints(16)
// const geometry = new THREE.BufferGeometry()

// geometry.setFromPoints(pointsArr)


// const material = new THREE.PointsMaterial({
//   color: 0xff00ff,
//   size: 10,
// })


// const points = new THREE.Points(geometry, material)


// const material2 = new THREE.LineBasicMaterial({
//   color: 0xff00ff,
// })

// const line = new THREE.Line(geometry, material2)

// 三维样条曲线
// const path = new THREE.CatmullRomCurve3([
//   new THREE.Vector3(-50, 20, 90),
//   new THREE.Vector3(-10, 40, 40),
//   new THREE.Vector3(0, 0, 0),
//   new THREE.Vector3(60, -60, 0),
//   new THREE.Vector3(70, 0, 80)
// ]);

// const geometry = new THREE.TubeGeometry(path, 40, 2, 25)

// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide
// })

// const line = new THREE.Mesh(geometry, material)



// // 创建多段线条的顶点数据
// const p1 = new THREE.Vector3(0, 0, 100)
// const p2 = new THREE.Vector3(0, 0, 30);
// const p3 = new THREE.Vector3(0, 0, 0);
// const p4 = new THREE.Vector3(30, 0, 0);
// const p5 = new THREE.Vector3(100, 0, 0);
// // 1. 3D直线线段
// const line1 = new THREE.LineCurve3(p1, p2);
// // 2. 三维二次贝塞尔曲线
// const curve = new THREE.QuadraticBezierCurve3(p2, p3, p4);
// // 3. 3D直线线段
// const line2 = new THREE.LineCurve3(p4, p5);

// const CurvePath = new THREE.CurvePath();
// // 三条线拼接为一条曲线
// CurvePath.curves.push(line1, curve, line2);

// // CurvePath:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
// const geometry = new THREE.TubeGeometry(CurvePath, 50, 2, 25);



// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide
// })

// const line = new THREE.Mesh(geometry, material)

// Vector2表示的三个点坐标，三个点构成的轮廓相当于两端直线相连接
// const pointsArr = [
//   new THREE.Vector2(50, 60),
//   new THREE.Vector2(25, 0),
//   new THREE.Vector2(50, -60)
// ];

// // const geometry = new THREE.LatheGeometry(pointsArr)
// // 30：旋转圆周方向几何体细分精度
// // const geometry = new THREE.LatheGeometry(pointsArr, 30);
// // 0, Math.PI：旋转的开始角度和结束角度
// const geometry = new THREE.LatheGeometry(pointsArr, 30, 0, Math.PI);



// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide
// })

// const line = new THREE.Mesh(geometry, material)

// const curve = new THREE.SplineCurve([
//   new THREE.Vector2(50, 60),
//   new THREE.Vector2(25, 0),
//   new THREE.Vector2(50, -60)
// ])

// const pointsArr = curve.getPoints(50)

// const geometry = new THREE.LatheGeometry(pointsArr, 30)

// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide
// })

// const line = new THREE.Mesh(geometry, material)


// 一组二维向量表示一个多边形轮廓坐标
// const pointsArr = [
//   new THREE.Vector2(-50, -50),
//   new THREE.Vector2(-60, 0),
//   new THREE.Vector2(0, 50),
//   new THREE.Vector2(60, 0),
//   new THREE.Vector2(50, -50),
// ]

// // Shape表示一个平面多边形轮廓,参数是二维向量构成的数组pointsArr
// const shape = new THREE.Shape(pointsArr);

// const geometry = new THREE.ShapeGeometry(shape);

// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide,
//  // wireframe: true,
// });


// const line = new THREE.Mesh(geometry, material)


// Shape表示一个平面多边形轮廓
// const shape = new THREE.Shape([
//   // 按照特定顺序，依次书写多边形顶点坐标
//   new THREE.Vector2(-50, -50), //多边形起点
//   new THREE.Vector2(-50, 50),
//   new THREE.Vector2(50, 50),
//   new THREE.Vector2(50, -50),
// ]);


// const geometry = new THREE.ExtrudeGeometry(
//   shape, {
//   depth: 20,
//   bevelThickness: 5, //倒角尺寸:拉伸方向
//   bevelSize: 5, //倒角尺寸:垂直拉伸方向
//    // bevelSegments: 20, //倒圆角：倒角细分精度，默认3
//     bevelSegments: 1, //倒直角
//     bevelEnabled: false, //禁止倒角,默认true
// }
// );


// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide,
// });

// const line = new THREE.Mesh(geometry, material)

// 扫描轮廓：Shape表示一个平面多边形轮廓
// const shape = new THREE.Shape([
  // 按照特定顺序，依次书写多边形顶点坐标
//   new THREE.Vector2(0, 0), //多边形起点
//   new THREE.Vector2(0, 10),
//   new THREE.Vector2(10, 10),
//   new THREE.Vector2(10, 0),
// ]);

// // 扫描轨迹：创建轮廓的扫描轨迹(3D样条曲线)
// const curve = new THREE.CatmullRomCurve3([
//   new THREE.Vector3(-10, -50, -50),
//   new THREE.Vector3(10, 0, 0),
//   new THREE.Vector3(8, 50, 50),
//   new THREE.Vector3(-5, 0, 100)
// ]);

// //扫描造型：扫描默认没有倒角
// const geometry = new THREE.ExtrudeGeometry(
//   shape, //扫描轮廓
//   {
//     extrudePath: curve,//扫描轨迹
//     steps: 100//沿着路径细分精度，越大越光滑
//   }
// );


// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide,
// });

// const line = new THREE.Mesh(geometry, material)

// Shape表示一个平面多边形轮廓
// const shape = new THREE.Shape([
//   // 按照特定顺序，依次书写多边形顶点坐标
//   new THREE.Vector2(-50, -50), //多边形起点
//   new THREE.Vector2(-50, 50),
//   new THREE.Vector2(50, 50),
//   new THREE.Vector2(50, -50),
// ]);

// const shape = new THREE.Shape();
// const path = new THREE.Path();

// shape.moveTo(10, 0)
// shape.lineTo(100, 0)
// shape.lineTo(100, 100)
// shape.lineTo(10,100)

// // const geometry = new THREE.ShapeGeometry(shape)

// // ExtrudeGeometry拉伸Shape获得一个长方体几何体
// const geometry = new THREE.ExtrudeGeometry(shape, {
//   depth: 20,//拉伸长度
//   bevelEnabled: false,//禁止倒角
// });

// 下面代码绘制了一个矩形+扇形的轮廓，圆心在(100, 0),半径50。
// const shape = new THREE.Shape();
// shape.lineTo(100 + 50, 0); //.currentPoint变为(100+50,0)
// // 圆弧.arc参数的圆心0,0坐标是相对当前.currentPoint而言，而不是坐标原点
// shape.arc(-50, 0, 50, 0, Math.PI / 2); //.currentPoint变为圆弧线结束点坐标
// console.log('currentPoint', shape.currentPoint);
// // 绘制直线，直线起点：圆弧绘制结束的点  直线结束点：(0, 0)
// shape.lineTo(0, 50);

// 下面代码绘制了一个矩形+扇形的轮廓，圆心在(100, 0),半径50。
// const shape = new THREE.Shape();
// shape.lineTo(100, 0); //.currentPoint变为(100,0)
// // 圆弧.arc参数的圆心0,0坐标是相对当前.currentPoint而言，而不是坐标原点
// shape.arc(0, 0, 50, 0, Math.PI / 2); //.currentPoint变为圆弧线结束点坐标
// console.log('currentPoint', shape.currentPoint);
// // 绘制直线，直线起点：圆弧绘制结束的点  直线结束点：(0, 0)
// shape.lineTo(0, 50);
// const shape = new THREE.Shape();
// shape.lineTo(100, 0); //.currentPoint变为(100,0)
// // absarc圆心坐标不受到.currentPoint影响，以坐标原点作为参考
// shape.absarc(100, 0, 50, 0, Math.PI / 2); //.currentPoint变为圆弧线结束点坐标
// console.log('currentPoint', shape.currentPoint);
// shape.lineTo(0, 50);
// const shape = new THREE.Shape();
// shape.lineTo(100 + 50, 0); //.currentPoint变为(100+50,0)
// // absarc圆心坐标不受到.currentPoint影响，以坐标原点作为参考
// shape.absarc(100, 0, 50, 0, Math.PI / 2); //.currentPoint变为圆弧线结束点坐标
// console.log('currentPoint', shape.currentPoint);
// shape.lineTo(0, 50);
// const shape = new THREE.Shape();
// .lineTo(100, 0)绘制直线线段，线段起点：.currentPoint，线段结束点：(100,0)
// shape.lineTo(100, 0);
// shape.lineTo(100, 100);
// shape.lineTo(0, 100);

// // Shape内孔轮廓
// const path1 = new THREE.Path();// 圆孔1
// path1.absarc(20, 20, 10);
// const path2 = new THREE.Path();// 圆孔2
// path2.absarc(80, 20, 10);
// const path3 = new THREE.Path();// 方形孔
// path3.moveTo(50, 50);
// path3.lineTo(80, 50);
// path3.lineTo(80, 80);
// path3.lineTo(50, 80);

// //三个内孔轮廓分别插入到holes属性中
// shape.holes.push(path1, path2, path3);


// // shape:填充轮廓
// // const geometry = new THREE.ShapeGeometry(shape, 20);

// const geometry = new THREE.ExtrudeGeometry(shape, {
//   depth: 20,//拉伸长度
//   bevelEnabled: false,//禁止倒角
//   curveSegments: 50,
// });



// const material = new THREE.MeshLambertMaterial({
//   color: 0xff00ff,
//   side: THREE.DoubleSide,
// });

// const line = new THREE.Mesh(geometry, material)


// const geometry = new THREE.BoxGeometry(50, 50, 50);
// const material = new THREE.MeshLambertMaterial({
//   color: 0x004444,
//   transparent: true,
//   opacity: 0.5,
// });
// const mesh = new THREE.Mesh(geometry, material);

// // 长方体作为EdgesGeometry参数创建一个新的几何体
// const edges = new THREE.EdgesGeometry(geometry);
// const edgesMaterial = new THREE.LineBasicMaterial({
//   color: 0x00ffff,
// })
// const line = new THREE.LineSegments(edges, edgesMaterial);
// mesh.add(line);

// const geometry = new THREE.CylinderGeometry(60, 60, 100, 30);
// const edges = new THREE.EdgesGeometry(geometry,30);
// // const edges = new THREE.EdgesGeometry(geometry);



// const material = new THREE.MeshLambertMaterial({
//   color: 0x004444,
//   transparent: true,
//   opacity: 0.5,
// });
// const mesh = new THREE.Mesh(geometry, material);

// const edgesMaterial = new THREE.LineBasicMaterial({
//   color: 0x00ffff,
// })

// const line = new THREE.LineSegments(edges, edgesMaterial)
// mesh.add(line)

// const geometry = new THREE.BufferGeometry(); //创建一个几何体对象
// const vertices = new Float32Array([
//   0, 0, 0, //顶点1坐标
//   50, 0, 0, //顶点2坐标
//   0, 25, 0, //顶点3坐标
// ]);
// // 顶点位置
// geometry.attributes.position = new THREE.BufferAttribute(vertices, 3);

// const colors = new Float32Array([
//   1, 0, 0, //顶点1颜色
//   0, 0, 1, //顶点2颜色
//   0, 1, 0, //顶点3颜色
// ]);
// // 设置几何体attributes属性的颜色color属性
// //3个为一组,表示一个顶点的颜色数据RGB
// geometry.attributes.color = new THREE.BufferAttribute(colors, 3);

// // 点渲染模式
// const material = new THREE.PointsMaterial({
//   // color: 0x333333,//使用顶点颜色数据，color属性可以不用设置
//   vertexColors: true,//默认false，设置为true表示使用顶点颜色渲染
//   size: 20.0, //点对象像素尺寸
// });
// const points = new THREE.Points(geometry, material); //点模型对象

// const material2 = new THREE.LineBasicMaterial({
//   vertexColors: true,//使用顶点颜色渲染
// });
// const line = new THREE.Line(geometry, material2);

// const material3 = new THREE.MeshBasicMaterial({
//   // color: 0x333333,//使用顶点颜色数据，color属性可以不用设置
//   vertexColors: true,//默认false，设置为true表示使用顶点颜色渲染
//   side: THREE.DoubleSide,
// });
// const mesh = new THREE.Mesh(geometry, material3);

const geometry = new THREE.BufferGeometry()

// 三维样条曲线
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-50, 20, 90),
  new THREE.Vector3(-10, 40, 40),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(60, -60, 0),
  new THREE.Vector3(70, 0, 80)
]);

const pointsArr = curve.getSpacedPoints(100)
geometry.setFromPoints(pointsArr)

const pos = geometry.attributes.position;
const count = pos.count;
const colorsArr = []

const c1 = new THREE.Color(0x00ffff); //曲线起点颜色 青色
const c2 = new THREE.Color(0xffff00); //曲线结束点颜色 黄色
for (let i = 0; i < count; i++) {
  const percent = i / count
  // colorsArr.push(percent,0,1 - percent)
  const c = c1.clone().lerp(c2, percent)
  colorsArr.push(c.r,c.g,c.b)
}

const colors = new Float32Array(colorsArr)

geometry.attributes.color = new THREE.BufferAttribute(colors, 3)

const material = new THREE.LineBasicMaterial({
  vertexColors: true
})

const line = new THREE.Line(geometry, material)


// const c1 = new THREE.Color(0xff0000); //红色
// const c2 = new THREE.Color(0x0000ff); //蓝色
// const c = new THREE.Color();

// c.lerpColors(c1, c2, 0);
// console.log('颜色插值结果', c);

// const c1 = new THREE.Color(0xff0000); //红色
// const c2 = new THREE.Color(0x0000ff); //蓝色
// const c = c1.clone().lerp(c2, 0.5);//颜色插值计算



// console.log(c)


function demo(gltf) {
  const mesh = gltf.scene.children[0]
  const pos = mesh.geometry.attributes.position
  const count = pos.count

  const yArr = []
  for (let i = 0; i < count; i++) {
    yArr.push(pos.getY(i))
  }
  yArr.sort()
  const miny = yArr[0]
  const maxy = yArr[yArr.length - 1]
  const height = maxy - miny

  const colorsArr = []
  const c1 = new THREE.Color(0x0000ff);//山谷颜色
  const c2 = new THREE.Color(0xff0000);//山顶颜色
  for (let i = 0; i < count; i++) {
    const percent = (pos.getY(i) - miny) / height
    const c = c1.clone().lerp(c2, percent)
    colorsArr.push(c.r,c.g,c.b)
  }
  const colors = new Float32Array(colorsArr)
  mesh.geometry.attributes.color = new THREE.BufferAttribute(colors, 3)

  mesh.material = new THREE.MeshLambertMaterial({
    vertexColors: true
  })
}


export {
  line
}
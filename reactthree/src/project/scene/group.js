import * as THREE from 'three'


/**
 * 创建网格模型
 */
var geometry = new THREE.BoxGeometry(50, 50, 50); //创建一个立方体几何对象Geometry
// 材质对象Material
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff,//材质颜色
});
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

var group = new THREE.Group();//组对象
group.add(mesh);

mesh.position.set(20, 0, 0);//设置mesh局部坐标

group.position.set(200, 0, 100);//设置group局部坐标

// mesh的世界坐标受到父节点 group  scene影响，结果x坐标为200+20   scene作为根节点position属性默认0,0,0 和世界坐标系坐标原点重合

// 调整mesh局部坐标系的坐标原点位置
geometry.translate(0, 25, 0);//使局部坐标原点和立方体底部平面中心重合






export { group, mesh }




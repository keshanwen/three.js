// 引入three.js
import * as THREE from '../../../../three.js-r133/build/three.module.js';
import {
    lon2xy
} from './math.js';
var lineGroup = new THREE.Group(); //声明一个组对象
var loader = new THREE.FileLoader();
loader.setResponseType('json')
//轨迹线数据解析W
loader.load('./scene/地铁.json', function (data) {

    data.geometries.forEach(function (obj) {
        var pointsArr = []
        obj.coordinates.forEach(function (coord) {
            // var xy = lon2xy(coord[0], coord[1]);//经纬度转墨卡托
            var xy = lon2xy(coord[0]-0.0128, coord[1]-0.0075);//建筑物和地铁经纬度数据来源不同，适当偏移
            pointsArr.push(xy.x, xy.y, 0);
        })
        var line = createLine(pointsArr); //创建一条轨迹线
        lineGroup.add(line);
    })

});

// 通过一系列坐标点生成一条轨迹线
function createLine(pointsArr) {
    /**
     * 通过BufferGeometry构建一个几何体，传入顶点数据
     * 通过Line模型渲染几何体，连点成线
     */
    var geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
    //类型数组创建顶点数据
    var vertices = new Float32Array(pointsArr);
    // 创建属性缓冲区对象
    var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
    // 设置几何体attributes属性的位置属性
    geometry.attributes.position = attribue;
    // 线条渲染几何体顶点数据
    var material = new THREE.LineBasicMaterial({
        color: 0x006666 //线条颜色
    }); //材质对象
    var line = new THREE.Line(geometry, material); //线条模型对象

    var PointsMaterial = new THREE.PointsMaterial({
        color: 0xffff00,
        size: 300 //点对象像素尺寸  相机渲染范围越大，设置的值越大
      }); //材质对象
      var points = new THREE.Points(geometry, PointsMaterial); //点模型对象
      line.add(points);

    return line;
}
export {
    lineGroup
};
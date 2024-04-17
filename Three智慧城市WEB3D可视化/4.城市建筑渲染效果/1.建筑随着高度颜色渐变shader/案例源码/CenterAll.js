import * as THREE from '../../../three.js-r133/build/three.module.js';

function CenterAll(group) {
    // 包围盒计算模型对象的大小和位置
    var box3 = new THREE.Box3();
    box3.expandByObject(group); // 计算模型包围盒
    console.log('查看包围盒box3', box3);
    var size = new THREE.Vector3();
    box3.getSize(size); // 计算包围盒尺寸
    console.log('查看返回的包围盒尺寸', size);
    var center = new THREE.Vector3();
    box3.getCenter(center); // 计算一个层级模型对应包围盒的几何体中心坐标
    console.log('几何中心', center);
}

export {
    CenterAll
}
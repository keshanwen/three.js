// 点材质
const material = new THREE.PointsMaterial({
  color: 0xffff00,
  size: 10.0 //点对象像素尺寸
});
// 点模型
const points = new THREE.Points(geometry, material);

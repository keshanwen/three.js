import * as THREE from 'three';
import type CreateThree from '@/threeEdit/createThreeInstance';
import { createWaveMesh } from '@/threeEdit/util/waveMesh';
import { createBox } from '@/threeEdit/util/createBox';


// size:控制整体大小
function createConeMesh(size: number) {
  var height = size * 4; //棱锥高度
  // 圆锥体几何体API(ConeGeometry)圆周方向四等分实现四棱锥效果
  var geometry = new THREE.ConeGeometry(size, height, 4);
  // 可以根据需要旋转到特定角度
  // geometry.rotateX(Math.PI);
  geometry.rotateX(-Math.PI / 2);
  geometry.translate(0, 0, height / 2);
  // MeshBasicMaterial MeshLambertMaterial
  var material = new THREE.MeshLambertMaterial({
    // color: 0xffcc00,
    color: 0x22ffcc,
  });
  var mesh = new THREE.Mesh(geometry, material);

  // 棱锥上在叠加一个棱锥
  var mesh2 = mesh.clone();
  mesh2.scale.z = 0.5;
  mesh2.position.z = height * (1 + mesh2.scale.z);
  mesh2.rotateX(Math.PI);
  mesh.add(mesh2);
  mesh.rotateX(-Math.PI / 2);

  // 棱锥旋转动画
  function animation() {
    mesh.rotateZ(0.05);
    requestAnimationFrame(animation);
  }
  animation();

  var WaveMesh = createWaveMesh(size);
  WaveMesh.position.z = height;
  createWaveMesh(size);
  mesh.add(WaveMesh);

  return mesh;
}



function insertConeMesh(name: string, app: CreateThree) {
  let target = app.scene.getObjectByName(name);
  const { x, y, z } = target?.position;
  const { size } = createBox(target);
  const { y: height } = size;
  const coneMesh = createConeMesh(1);
  coneMesh.position.set(x, y + height + 1, z);

  return coneMesh
}

export { createConeMesh, insertConeMesh };

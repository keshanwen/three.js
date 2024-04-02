import * as THREE from 'three'


/**
   * 创建网格模型
   */
var geometry = new THREE.BoxGeometry(100, 100, 100); //立方体

var loader = new THREE.CubeTextureLoader();
// 所有贴图在同一目录下，可以使用该方法设置共用路径
loader.setPath('环境贴图/');
// 立方体纹理加载器返回立方体纹理对象CubeTexture
var CubeTexture = loader.load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
//材质对象Material
var material = new THREE.MeshPhongMaterial({
  metalness: 1.0,
  roughness: 0.5,
  envMapIntensity: 1,
  envMap: CubeTexture, //设置环境贴图
  // 环境贴图反射率
  // reflectivity: 0.1,
});
material.needsUpdate = true
console.log(material.envMapIntensity);


var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh


material.envMap = CubeTexture; //设置环境贴图

CubeTexture.encoding = THREE.sRGBEncoding

export {
  mesh
}
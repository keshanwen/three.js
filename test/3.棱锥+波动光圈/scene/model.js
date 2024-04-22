// 引入Three.js
import * as THREE from "../../../../three.js-r133/build/three.module.js";
import { createConeMesh } from "./ConeMesh.js";
var model = new THREE.Group(); //声明一个组对象

var ConeMesh = createConeMesh(10);
model.add(ConeMesh);

export { model };

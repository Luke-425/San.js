import './style.css';
import * as THREE from 'three';

// SCENE
const scene = new THREE.Scene();

//
// 紫 立方体 金網
//
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x7d00ff });
const mesh = new THREE.Mesh(geometry, material);

//
// 位置
//
// mesh.position.x = -0.2;
// mesh.position.y = 0.5;
// mesh.position.z = 1;
mesh.position.set(0, -1, 1);

scene.add(mesh);

// console.log(mesh.position.length());

//
// AXES HELPER
//
const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

//
// サイズ
//
const sizes = {
  width: 800,
  height: 600,
};

//
// SCALE
//
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.3;
mesh.scale.set(2.2, 0.7, 0.3);

//
// 回転
//
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI * 0.5;
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.z = 0.0;

//
// カメラ
//
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// camera.position.x = 1;
// camera.position.y = 0;
camera.position.z = 4;

scene.add(camera);

camera.lookAt(mesh.position);

// console.log(mesh.position.distanceTo(camera.position));
// console.log(mesh.position.normalize());

//
// レンダラ
//
const canvas = document.querySelector('canvas.webgl');

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

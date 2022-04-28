import './style.css';
import * as THREE from 'three';

// SCENE
const scene = new THREE.Scene();

//
// 団体
//
const group = new THREE.Group();
group.position.y = -1.5;
group.scale.y = 2;
group.rotation.x = Math.PI * -0.88;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'purple' })
);
cube1.position.x = -2;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'magenta' })
);
cube2.position.x = 2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'pink' })
);
cube3.position.x = 0;
group.add(cube3);

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
// カメラ
//
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// camera.position.x = 1;
// camera.position.y = 0;
camera.position.z = 4;

scene.add(camera);

//
// レンダラ
//
const canvas = document.querySelector('canvas.webgl');

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

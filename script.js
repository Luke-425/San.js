const scene = new THREE.Scene();

// 紫 cube mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x7d00ff });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// サイズ
const sizes = {
  width: 800,
  height: 600,
};

// カメラ
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

// レンダラ
const canvas = document.querySelector('canvas.webgl');

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

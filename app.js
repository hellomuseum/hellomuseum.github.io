import * as THREE from 'https://cdn.skypack.dev/three@v0.135';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1,2,2,2);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const cube = new THREE.Mesh(geometry,material);

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xff0000}));

scene.add(cube);
scene.add(line);

camera.position.z = 5;

function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene,camera);
	line.rotation.x += 0.01;
	line.rotation.y += 0.01;
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}
animate();
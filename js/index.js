const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const TorusGeometry = new THREE.TorusBufferGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xD6F202 } );
const torus = new THREE.Mesh( TorusGeometry, material );

const planeGeometry = new THREE.PlaneGeometry();
const plane = new THREE.Mesh( planeGeometry, material );
scene.add( plane , torus );

plane.position.x += 1

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	
}
animate();
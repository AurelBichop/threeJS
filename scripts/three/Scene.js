import * as THREE from 'three';

export default class Scene{
    constructor(idCanvas, classDiv){
        this.divCanvas = document.querySelector(classDiv);
        
        this.createScene();
        this.createCamera();
        this.createRenderer(idCanvas);
        this.createObjects();
        this.addEventOnResize();
        this.animate();
    }

    createScene(){
        this.scene = new THREE.Scene();
    }

    createRenderer(idCanvas){
        const canvas = document.getElementById(idCanvas);
        

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        this.setSizeRenderer();
        //document.body.appendChild( this.renderer.domElement );
    }

    setSizeRenderer(){
        this.renderer.setSize( 
            this.divCanvas.clientWidth, 
            this.divCanvas.clientHeight 
        );
    }

    createCamera(){
        this.camera = new THREE.PerspectiveCamera( 50, this.getRatio(), 0.1, 1000 );
        this.camera.position.z = 5;
    }

    getRatio(){
        return this.divCanvas.clientWidth / this.divCanvas.clientHeight;
    }

    createLigths(){

    }

    createObjects(){
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );
    }

    onResize(){
        console.log();
        this.setSizeRenderer();
        this.camera.aspect = this.getRatio();
        this.camera.updateProjectionMatrix();
    }

    addEventOnResize(){
        window.addEventListener("resize", this.onResize.bind(this))
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );
    
        this.mesh.rotation.x += 0.05;
        this.mesh.rotation.y += 0.05;
    
        this.renderer.render( this.scene, this.camera );
    }
}
import * as THREE from 'three';
import Personnage3D from './Personnage3D';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Scene{
    constructor(idCanvas, classDiv, linksGltfPersonnages){
        this.divCanvas = document.querySelector(classDiv);
        this.linksGltfPersonnages = linksGltfPersonnages;

        this.createScene();
        this.createCamera();
        this.createRenderer(idCanvas);
        this.createControls();
        this.createObjects();
        this.createLigths();
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
        this.camera.position.z = 8;
        this.camera.position.y = 2;
    }

    getRatio(){
        return this.divCanvas.clientWidth / this.divCanvas.clientHeight;
    }

    createControls(){
        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.target.set(0,2,0);
        controls.update();
    }

    createLigths(){
        const ambiantLight = new THREE.AmbientLight(0x2e2e2e);
        const light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set( 3, 5, 2);
        const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
        light2.position.set( -5, 3, -5);
        const light3 = new THREE.PointLight( 0xffffff, 1, 100 );
        light3.position.set(0,1, 2);
        
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );
        this.scene.add(light);
        this.scene.add(light2);
        this.scene.add(light3);
        this.scene.add(ambiantLight);

    }

    createObjects(){
        for (let link of this.linksGltfPersonnages){
            new Personnage3D(this.scene, link);
        } 
        
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
    
        // this.mesh.rotation.x += 0.05;
        // this.mesh.rotation.y += 0.05;
    
        this.renderer.render( this.scene, this.camera );
    }
}
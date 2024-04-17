import * as THREE from 'three';
import Personnage3D from './Personnage3D';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Scene{
    constructor(idCanvas, classDiv){
        this.divCanvas = document.querySelector(classDiv);
        
        this.createScene();
        this.createCamera();
        this.createRenderer(idCanvas);
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

    createLigths(){
        const ambiantLight = new THREE.AmbientLight(0x2e2e2e);
        const light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set( 2, 5, 2 );
        const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
        light2.position.set( -5, 3, -5);
        
        this.scene.add(light);
        this.scene.add(light2);
        this.scene.add(ambiantLight);
    }

    createObjects(){
        new Personnage3D(this.scene, '../../assets/gltf/luke_v05.gltf');
        
        // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // this.mesh = new THREE.Mesh( geometry, material );
        // this.scene.add( this.mesh );
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
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Personnage3D{
    constructor(scene, gltfPath){
        this.scene = scene;
        this.importGLTF(gltfPath);
    }

    importGLTF(gltfPath){
        const loader = new GLTFLoader();

        loader.load(gltfPath, (gltf) => {
            this.scene.add(gltf.scene);
        })
    
    }
}
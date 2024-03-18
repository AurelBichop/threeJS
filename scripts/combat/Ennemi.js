import Personnage from "./Personnage.js";
import { capitalize } from "../utils.js";

export default class Ennemi extends Personnage{
constructor(
    pointDeVie, 
    energie,
    nom,
    imageSource,
    estDuCoteObscure,
    jeu,
    attaques,
    estLePersoChoisi
    ){
        super(
            pointDeVie, 
            energie,
            nom,
            imageSource,
            estDuCoteObscure,
            jeu,
            attaques,
            estLePersoChoisi,
        );
    }

    selectionnerUneAttaque(){
        let rand = Math.random() * (this.attaques.length - 1);
        rand = Math.round(rand);
        return this.attaques[rand];
    }
    
    attaquerPersonnage(animationName,callback){
        if(this.pointDeVie > 0){     
            const attaqueSlectionnee = this.selectionnerUneAttaque();
            this.ajouteAnimationAttaque(animationName);
            this.jeu.personnage.enleverDesPv(attaqueSlectionnee.degat);
            this.createInfoBox(attaqueSlectionnee);
            setTimeout(() => {
                this.finAttaque();
                if(this.jeu.personnage.pointDeVie > 0){
                    callback();
                }else{
                    this.gagne();
                }
            }, 2000);
        }else{
            this.jeu.personnage.gagne();
        }
    }

    finAttaque(){
        this.divPersonnage.removeChild(this.pNomAttaque)
    }

    createInfoBox(attaqueSlectionnee){
        this.pNomAttaque = document.createElement("p");
        this.pNomAttaque.textContent = `${capitalize(this.jeu.ennemi.nom)} attaque ${capitalize(this.jeu.personnage.nom)} avec ${attaqueSlectionnee.nom}`;
        this.divPersonnage.appendChild(this.pNomAttaque);
    }
}
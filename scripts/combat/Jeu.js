import Attaque from "./Attaque.js";
import Personnage from "./Personnage.js";
import Ennemi from "./Ennemi.js";



export default class Jeu {
    
    
    constructor(){
        const nomPersonnageChoisi = localStorage.getItem("jediChoisi");
        const estLuke = nomPersonnageChoisi == "luke";
        const estVador = nomPersonnageChoisi == "vador";

        if(estVador){
            this.ennemi = this.createLuke(estLuke);
            this.personnage = this.createVador(estVador);
        }else{
            this.ennemi = this.createVador(estVador);
            this.personnage = this.createLuke(estLuke);
        }
        
    }

    createLuke(estLePersoChoisi){
        let typePersonnage = estLePersoChoisi ? Personnage : Ennemi;
        const luke = new typePersonnage(
            100,
            200,
            "luke",
            "assets/luke.jpg",
            false,
            this,
            [
                new Attaque("salto",70,40,this),
                new Attaque("tourni",20,30,this),
                new Attaque('pointe',10,10,this)
            ],
            estLePersoChoisi
        );

        return luke;
    }

    createVador(estLePersoChoisi){
        let typePersonnage = estLePersoChoisi ? Personnage : Ennemi;
        const vador =  new typePersonnage(
            150,
            150,
            "vador",
            "assets/dark_vador.jpg",
            true,
            this,
            [
                new Attaque("force",55,25,this),
                new Attaque("envoyer son sabre",15,20,this),
                new Attaque('regard perçant',10,10,this)
            ],
            estLePersoChoisi
        );

        return vador;
    }
}
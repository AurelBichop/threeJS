import { capitalize } from "../utils.js";

export default class Personnage {
    constructor(
        pointDeVie, 
        energie,
        nom,
        imageSource,
        estDuCoteObscure,
        jeu,
        attaques,
        estLePersoChoisi,
    ){
        this.pointDeVie = pointDeVie;
        this.initPointDevies = pointDeVie;
        this.energie = energie;
        this.imageSource = imageSource;
        this.estDuCoteObscure = estDuCoteObscure;
        this.jeu = jeu;
        this.attaques = attaques;
        this.estLePersoChoisi = estLePersoChoisi;
        this.nom = nom,

        this.creerHtmlBase(nom);
        this.creerHtmlVie();
        this.creerAttaques();
    }

    creerHtmlBase(nom){
        this.divPersonnage = document.createElement("div");
        this.divPersonnage.classList.add("personnage");
        this.divPersonnage.classList.add(nom);

        const divPersonnages = document.querySelector(".personnages");
        divPersonnages.appendChild(this.divPersonnage);

        if(this.estLePersoChoisi){
            const pseudo = document.createElement("p");
            pseudo.textContent = localStorage.getItem("pseudo");
            pseudo.classList.add("pseudo");
            this.divPersonnage.appendChild(pseudo);
        }else{
            const div = document.createElement("div");
            div.classList.add("espace");
            this.divPersonnage.appendChild(div);
        }

        const img = document.createElement("img");
        img.src = this.imageSource;
        img.alt = nom;
        this.divPersonnage.appendChild(img);
    }

    creerHtmlVie(){
        this.creerParagraphe("Vie restante");
        const vieTotal = document.createElement("div");
        vieTotal.classList.add("total-vie");
        this.divVie = document.createElement("div");
        this.divVie.classList.add("vie");
        
        this.divPersonnage.appendChild(vieTotal);
        vieTotal.appendChild(this.divVie);
    }

    creerAttaques(){

        if(this.estLePersoChoisi){
            this.creerParagraphe("Mes attaques");

            let classList;
            if(this.estDuCoteObscure){
                classList = ["red-illumination"];
            }else{
                classList = ["green-illumination"];
            }

            for(let attaque of this.attaques){
                attaque.creerHtmlElement(this.divPersonnage, classList);
            }
            this.divPersonnage.classList.add('first');
        }
    }
    
    attaquerPersonnage(animationName,attaqueChoisi){
        if(this.pointDeVie > 0){
            this.ajouteAnimationAttaque(animationName);
            this.jeu.ennemi.enleverDesPv(attaqueChoisi.degat);
        }else{
            this.jeu.ennemi.gagne();
        }
    }

    enleverDesPv(pointDeVie){
        const factor = 100 / this.initPointDevies;
        this.pointDeVie = this.pointDeVie - pointDeVie;
        this.divVie.style.width = `calc(${this.pointDeVie * factor}% - var(--padding-vie))`;
    }

    creerParagraphe(text){
        const paragraphe = document.createElement("p");
        paragraphe.textContent = text;
        this.divPersonnage.appendChild(paragraphe);
    }

    ajouteAnimationAttaque(animationName){
        this.divPersonnage.classList.add(animationName);

        let duration = getComputedStyle(
            document.body
            ).getPropertyValue("--duration-animation-attaque");

        duration = duration.replace("ms","");
        duration = parseInt(duration);

        setTimeout(()=>{
            this.enleveAnimationAttaque(animationName)
            
        },duration)
    
    }


    enleveAnimationAttaque(animationName){
        this.divPersonnage.classList.remove(animationName);
    }

    gagne(){
        const section = document.getElementsByTagName("section")[0];
        
        const p = document.createElement("p");
        p.textContent = `${capitalize(this.nom)} a gagné !`;

        section.appendChild(p);
    }
}

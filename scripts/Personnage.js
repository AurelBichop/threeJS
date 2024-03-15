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
        this.energie = energie;
        this.imageSource = imageSource;
        this.estDuCoteObscure = estDuCoteObscure;
        this.jeu = jeu;
        this.attaques = attaques;
        this.estLePersoChoisi = estLePersoChoisi;

        this.creerHtmlBase(nom);
        this.creerHtmlVie();
        this.creerAttaques();
    }

    creerHtmlBase(nom){
        this.divPersonnage = document.createElement("div");
        this.divPersonnage.classList.add("personnage");
        this.divPersonnage.classList.add(nom);
        const img = document.createElement("img");
        img.src = this.imageSource;
        img.alt = nom;

        const divPersonnages = document.querySelector(".personnages");
        divPersonnages.appendChild(this.divPersonnage);
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
    
    attaquerEnnemi(attaqueChoisi){
        this.jeu.ennemi.enleverDesPv(attaqueChoisi.degat);
    }

    enleverDesPv(pointDeVie){
        this.pointDeVie = this.pointDeVie - pointDeVie;
        this.divVie.style.width = `calc(${this.pointDeVie}% - var(--padding-vie))`;
    }

    creerParagraphe(text){
        const paragraphe = document.createElement("p");
        paragraphe.textContent = text;
        this.divPersonnage.appendChild(paragraphe);
    }
}

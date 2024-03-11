export default class Personnage {
    constructor(
        pointDeVie, 
        attaques,
        energie,
        nom,
        imageSource,
        estDuCoteObscure
    ){
        this.pointDeVie = pointDeVie;
        this.attaques = attaques;
        this.energie = energie;
        this.imageSource = imageSource;
        this.estDuCoteObscure = estDuCoteObscure;
        
        this.creerHtmlBase(nom);
        this.creerHtmlVie();
        this.creerHtmlAttaques();
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

    creerHtmlAttaques(){
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

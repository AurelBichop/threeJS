class Personnage {
    constructor(
        pointDeVie, 
        attaques,
        nombreAttaquesDispo,
        nom,
        imageSource
    ){
        this.pointDeVie = pointDeVie;
        this.attaques = attaques;
        this.nombreAttaquesDispo = nombreAttaquesDispo;
        this.imageSource = imageSource;
        
        this.creerHtmlBase(nom);
        this.creerHtmlVie();
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
        const vieTotal = document.createElement("div");
        vieTotal.classList.add("total-vie");
        this.divVie = document.createElement("div");
        this.divVie.classList.add("vie");
        
        this.divPersonnage.appendChild(vieTotal);
        vieTotal.appendChild(this.divVie);
    }

    enleverDesPv(pointDeVie){
        this.pointDeVie = this.pointDeVie - pointDeVie;
        this.divVie.style.width = `calc(${this.pointDeVie}% - var(--padding-vie))`;
    }
}

const luke = new Personnage(
    100,
    [],
    10,
    "luke",
    "assets/luke.jpg"
);

const vador = new Personnage(
    150,
    [],
    7,
    "vador",
    "assets/dark_vador.jpg"
);

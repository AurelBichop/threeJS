export default class Attaque{
    constructor(nom, energieNecessaire, degat,jeu){
        this.nom = nom;
        this.energieNecessaire = energieNecessaire;
        this.degat = degat;
        this.jeu = jeu
    }

    creerHtmlElement(htmlParent, classList){
        this.button = document.createElement("button");
        this.button.textContent = `${this.nom} (${this.energieNecessaire} energie requise) (${this.degats} PV enlevé)`;
        this.button.classList = classList;
        htmlParent.appendChild(this.button)

        this.addEventOnButton();
    }

    addEventOnButton(){
        this.button.addEventListener('click',() => this.onClickOnButton())
    }

    onClickOnButton(){
        this.jeu.personnage.attaquerEnnemi(this);
    }
}
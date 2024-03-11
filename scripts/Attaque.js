export default class Attaque{
    constructor(nom, energieNecessaire, degats){
        this.nom = nom;
        this.energieNecessaire = energieNecessaire;
        this.degats = degats;
    }

    creerHtmlElement(htmlParent, classList){
        const button = document.createElement("button");
        button.textContent = `${this.nom} (${this.energieNecessaire} energie requise) (${this.degats} PV enlevé)`;
        button.classList = classList;
        htmlParent.appendChild(button)
    }
}
import Attaque from "./Attaque.js";
import Personnage from "./Personnage.js";


const luke = new Personnage(
    100,
    [
        new Attaque("salto",50,50),
        new Attaque("tourni",20,30),
        new Attaque('pointe',10,10),
    ],
    200,
    "luke",
    "assets/luke.jpg",
    false
);

const vador = new Personnage(
    150,
    [
        new Attaque("force",40,35),
        new Attaque("envoyer son sabre",30,25),
        new Attaque('regard perçant',10,10),
    ],
    150,
    "vador",
    "assets/dark_vador.jpg",
    true
);
"use strict";
//slide 39: Déclaration de tableau 
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
//slide 40: Déclaration d'Objets  
const etudiant = { nom: "John", prenom: "DOE", age: 30 };

const tabObjets = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];
//slide 46: Déclaration d'une fonction sans paramètre
function f1() {
    //slide 45: Boucle for..of
    for (const e of etudiants) { console.log(e); }
}

function f2() {
    console.log(etudiant);
}

function f3() {
    for (const e of tabObjets) {
        //slide 38: affichage formaté (backstick)
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    }
}
"use strict";
//slide 41: Déclaration tableau d'Objet
const students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, n: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, n: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, n: 3 }
];
// slide 46: Déclaration d'une fonction avec retour 
function B(note) {
    //slide 43: Conditions
    return note >= 10;
}

function A() {
    //slide 45: Boucle for..of
    for (const s of students) {
        //slide 46: appel d'une fonction 
        const delib = B(s.note);
        //slide 38: affichage formaté (backstick)
        //slide 43: notation ternaire 
        console.log(`${s.id}: ${delib ? "ADMIS" : "AJOURNÉ"}`);
    }
}


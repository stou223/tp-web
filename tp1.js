//ex1
var v1;
let v2;
const v3=15;
v1=10;
v2=20;
{
    let v1=100;
    v2=200;
    console.log(`entre le bloc {} v1: ${v1}   v2: ${v2}`);
}
console.log(`en dehors v1: ${v1}   v2: ${v2}`);

//ex2
let somme = (a,b) => a + b;
console.log(`${somme(10,20)}`);


//ex3
const user = { name: "Noor", age: 10, city: "Tunis" };
let name = user.name;
let age = user.age;
let city = user.city;
console.log(`name : ${name}  age : ${age}  city : ${city}`);

//ex4
const tab1 = [1, 2, 3];
const tab2 = [4, 5, 6];
const fusion = [...tab1, ...tab2];
console.log(fusion);

const personne = {
    nom: "Ali",
    age: 25,
    ville: "Tunis"
};
const copie = { ...personne };
copie.age = 30;
console.log(personne);
console.log(copie);

//ex5
const livre = {
    titre: "Angels and demons",
    auteur: "Dan Brown",
    annee: 2000,
    getInfo() {
        return `${this.titre} de ${this.auteur} (${this.annee})`;
    }
};
console.log(livre.getInfo());

//ex6
class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    getMention() {
        if (this.note >= 16) return "Très bien";
        if (this.note >= 14) return "Bien";
        if (this.note >= 10) return "Passable";
        return "Échec";
    }
}
const etudiants = [new Etudiant("Ali", 17),new Etudiant("Sara", 13),new Etudiant("Omar", 9)];
etudiants.forEach(e => {
    console.log(`${e.nom} : ${e.getMention()}`);
});

//ex7
const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((somme, note) => somme + note, 0) / notes.length;
console.log("Moyenne :", moyenne);

const t = notes.sort((a, b) => b - a);
console.log("Tri décroissant :", t);

const notes10 = notes.filter(note => note >= 10);
console.log("Notes ≥10 :", notes10);
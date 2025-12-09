let taches=[];

class tache{
    constructor(str,etat){
        this.str = str;
        this.etat=etat;
    }
}

let temp = JSON.parse(localStorage.getItem('taches'));


if (temp != null) remplir(temp);
localStorage.clear();
localStorage.setItem('taches', JSON.stringify(taches));

//remplir les taches du array
function remplir(t){
    t.forEach(element => {
        ajouter_tache(element.str,element.etat);
    });
}

//bouton ajouter
document.getElementById('ajouter_tache').addEventListener('click',()=>{ajouter_tache(document.getElementById("tache").value,"A faire")});
//entrer pour ajouter
document.getElementById("tache").addEventListener("keydown",(key)=>{
    if (key.key==='Enter'){
        ajouter_tache(document.getElementById("tache").value,"A faire");
    }
});


function ajouter_tache(name,etat){
    let len = taches.length.toString();
    let t = new tache(name,etat);
    
    let x= document.createElement("li");
    x.setAttribute("class",`${len}`);
    let c= document.createElement("span");

    c.appendChild(document.createTextNode(`${t.etat}`));
    c.setAttribute("class","etat");
    x.appendChild(c);

    let a= document.createElement("span");
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(`${t.str}`));
    a.appendChild(p);
    if(t.etat == "Terminée") p.style.textDecoration="line-through";

    let ter = document.createElement("button");
    ter.setAttribute("class",`button ${len} terminer`);
    ter.appendChild(document.createTextNode("Terminer"));
    ter.addEventListener("click",()=>{ terminer_tache(x); })
    a.appendChild(ter);

    let supp = document.createElement("button");
    supp.setAttribute("class",`button ${len} supprimer`);
    supp.appendChild(document.createTextNode("Supprimer"));
    supp.addEventListener("click",()=>{ supprimer_tache(x) });
    a.appendChild(supp);

    a.setAttribute("class","txt_tache");
    
    x.appendChild(a);
    
    document.getElementById("liste_taches").appendChild(x);

    document.getElementById("tache").value="";

    taches.push(t);


    localStorage.clear();
    localStorage.setItem('taches', JSON.stringify(taches));
    maj_compteurs()
}


function supprimer_tache(x){
    x.outerHTML="";
    taches = taches.filter(element=>element.str!=x.childNodes[1].childNodes[0].innerHTML);
    localStorage.clear();
    localStorage.setItem('taches', JSON.stringify(taches));
    maj_compteurs()
}

function terminer_tache(x){
    x.childNodes[0].innerHTML="Terminée";
    x.childNodes[1].childNodes[0].style.textDecoration="line-through";
    for (let element of taches) {
        if(element.str==x.childNodes[1].childNodes[0].innerHTML){
            element.etat="Terminée";
        }
    }
    localStorage.clear();
    localStorage.setItem('taches', JSON.stringify(taches));
    maj_compteurs()
}


function maj_compteurs() {
    let en_cours = taches.filter(t => t.etat === "A faire").length;
    let terminees = taches.filter(t => t.etat === "Terminée").length;

    document.getElementById("en_cours").innerText = en_cours;
    document.getElementById("terminees").innerText = terminees;
}

document.getElementById("tout_supprimer").addEventListener("click", () => {
    taches = [];
    document.querySelectorAll("#liste_taches li:not(:first-child)").forEach(li => li.remove());
    localStorage.setItem('taches', JSON.stringify(taches));
    maj_compteurs();
});

document.getElementById("search").addEventListener("input", (e) => {
    let search = e.target.value.toLowerCase();

    document.querySelectorAll("#liste_taches li:not(:first-child)").forEach(li => {
        let text = li.childNodes[1].childNodes[0].innerHTML.toLowerCase();
        li.style.display = text.includes(search) ? "" : "none";
    });
});

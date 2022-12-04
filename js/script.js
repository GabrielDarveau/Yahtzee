var etatTour = 0;
const desSel = [0, 0, 0, 0, 0];
var player = [];
var rand;
var joueur;
var joueurActif;
var nbTour = 0;
var joueurs;

function innit(){
    document.getElementById("table").style.display = "none";
}

class Joueur{
    constructor(nom, val)
    {
        this.nom = nom;
        this.val = val;
    }
}

function newGame(){
    etatTour = 0;
    joueurs = document.getElementById("nbJoueurs").value;

    var max = joueurs;
    max++;

    rand = Math.floor(Math.random() * (max-1)) + 1;

    alert("Ce sera le joueur " + rand + " qui commencera!");

    joueur = "Jeu"+rand;
    joueurActif = rand;
    nbTour = 0;

    desSel[0] = 0;
    document.getElementById("d1").style.top = "700px";
    document.getElementById("d1").style.left = "400px";
    document.getElementById("d1").style.transform = "rotate(0)";
    document.getElementById("d1").classList.remove("active");

    desSel[1] = 0;
    document.getElementById("d2").style.top = "700px";
    document.getElementById("d2").style.left = "500px";
    document.getElementById("d2").style.transform = "rotate(0)";
    document.getElementById("d2").classList.remove("active");

    desSel[2] = 0;
    document.getElementById("d3").style.top = "700px";
    document.getElementById("d3").style.left = "600px";
    document.getElementById("d3").style.transform = "rotate(0)";
    document.getElementById("d3").classList.remove("active");

    desSel[3] = 0;
    document.getElementById("d4").style.top = "700px";
    document.getElementById("d4").style.left = "700px";
    document.getElementById("d4").style.transform = "rotate(0)";
    document.getElementById("d4").classList.remove("active");

    desSel[4] = 0;
    document.getElementById("d5").style.top = "700px";
    document.getElementById("d5").style.left = "800px";
    document.getElementById("d5").style.transform = "rotate(0)";
    document.getElementById("d5").classList.remove("active");

    document.getElementById("titreTable").colSpan = max;

    document.getElementById("nbLancers").innerHTML = " ";

    if(joueurs == "1"){
        var tab = document.getElementsByClassName("Jeu2");
        var numb = document.getElementsByClassName("Jeu2").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        var tabJeu = document.getElementsByClassName("ColJeu2");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }

        tab = document.getElementsByClassName("Jeu3");
        numb = document.getElementsByClassName("Jeu3").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu3");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }

        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu4");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }
    }
    else if(joueurs == "2"){
        tab = document.getElementsByClassName("Jeu3");
        numb = document.getElementsByClassName("Jeu3").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu3");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }

        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu4");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }
    }
    else if(joueurs == "3"){
        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu4");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }
    }

    nomJoueur();
}

function restartGame(){
    location.reload();
}

function start(){
    document.getElementById("choix").style.display = "none";
    joueurs = document.getElementById("nbJoueurs").value;

    for(let i = 1; i <= joueurs; i++)
    {
        var leJoueur = prompt("Quel est votre nom joueur "+ i +" ?");
        player[i]=new Joueur(leJoueur, i);
    }

    var max = joueurs;
    max++;

    rand = Math.floor(Math.random() * (max-1)) + 1;

    if(joueurs > 1){
        alert("Ce sera le joueur " + rand + " qui commencera!");
    }

    joueur = "Jeu"+rand;
    joueurActif = rand;

    document.getElementById("table").style.display = "block";
    document.getElementById("titreTable").colSpan = max;

    if(joueurs == "1"){
        var tab = document.getElementsByClassName("Jeu2");
        var numb = document.getElementsByClassName("Jeu2").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        var tabJeu = document.getElementsByClassName("ColJeu2");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }

        tab = document.getElementsByClassName("Jeu3");
        numb = document.getElementsByClassName("Jeu3").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu3");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }

        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu4");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }
    }
    else if(joueurs == "2"){
        tab = document.getElementsByClassName("Jeu3");
        numb = document.getElementsByClassName("Jeu3").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu3");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }

        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu4");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }
    }
    else if(joueurs == "3"){
        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }

        tabJeu = document.getElementsByClassName("ColJeu4");
        numb = tabJeu.length;
        for(let i = 0; i < numb; i++){
            tabJeu[i].style.display = "none";
        }
    }

    nomJoueur();
}

function nomJoueur(){
    document.getElementById("nom").innerHTML = "Tour de: " + player[joueurActif].nom + "<br> Case: " + joueur;
}

function nextJoueur(){
    var joueurs = document.getElementById("nbJoueurs").value;

    if(joueur == "Jeu"+rand)
    {
        nbTour++;
    }

    if(joueurs == 1 && joueur == "Jeu1")
    {
        etatTour = 0;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 2 && joueur == "Jeu1")
    {
        joueur = "Jeu2";
        etatTour = 0;
        joueurActif = 2;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 2 && joueur == "Jeu2")
    {
        joueur = "Jeu1";
        etatTour = 0;
        joueurActif = 1;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 3 && joueur == "Jeu1")
    {
        joueur = "Jeu2";
        etatTour = 0;
        joueurActif = 2;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 3 && joueur == "Jeu2")
    {
        joueur = "Jeu3";
        etatTour = 0;
        joueurActif = 3;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 3 && joueur == "Jeu3")
    {
        joueur = "Jeu1";
        etatTour = 0;
        joueurActif = 1;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 4 && joueur == "Jeu1")
    {
        joueur = "Jeu2";
        etatTour = 0;
        joueurActif = 2;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 4 && joueur == "Jeu2")
    {
        joueur = "Jeu3";
        etatTour = 0;
        joueurActif = 3;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 4 && joueur == "Jeu3")
    {
        joueur = "Jeu4";
        etatTour = 0;
        joueurActif = 4;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    else if(joueurs == 4 && joueur == "Jeu4")
    {
        joueur = "Jeu1";
        etatTour = 0;
        joueurActif = 1;
        desSel[0] = 0;
        document.getElementById("d1").style.top = "700px";
        document.getElementById("d1").style.left = "400px";
        document.getElementById("d1").style.transform = "rotate(0)";
        document.getElementById("d1").classList.remove("active");

        desSel[1] = 0;
        document.getElementById("d2").style.top = "700px";
        document.getElementById("d2").style.left = "500px";
        document.getElementById("d2").style.transform = "rotate(0)";
        document.getElementById("d2").classList.remove("active");

        desSel[2] = 0;
        document.getElementById("d3").style.top = "700px";
        document.getElementById("d3").style.left = "600px";
        document.getElementById("d3").style.transform = "rotate(0)";
        document.getElementById("d3").classList.remove("active");

        desSel[3] = 0;
        document.getElementById("d4").style.top = "700px";
        document.getElementById("d4").style.left = "700px";
        document.getElementById("d4").style.transform = "rotate(0)";
        document.getElementById("d4").classList.remove("active");

        desSel[4] = 0;
        document.getElementById("d5").style.top = "700px";
        document.getElementById("d5").style.left = "800px";
        document.getElementById("d5").style.transform = "rotate(0)";
        document.getElementById("d5").classList.remove("active");
    }
    nomJoueur();
}

function Lancer(){
    if(etatTour < 3){
        for(let i = 1; i <= 5 ; i++){
            de = document.getElementById("d"+i);
            if(!de.classList.contains("active")){
                var pos = GetPos(de);
                de.style.top = pos[0] + 'px';
                de.style.left = pos[1] + 'px';
        
                var angle = (Math.floor(Math.random() * 360)) + "deg";
                de.style.transform = "rotate(" + angle + ")";
        
                var valeur = Math.floor(Math.random() * (7 - 1) + 1);
                de.src="img/"+valeur+".png";
            }
        }

        if(etatTour == 0)
        {
            document.getElementById("nbLancers").innerHTML = "Nombre de lancers restants: " + 2;
        }
        else if(etatTour == 1)
        {
            document.getElementById("nbLancers").innerHTML = "Nombre de lancers restants: " + 1;
        }
        else if(etatTour == 2)
        {
            document.getElementById("nbLancers").innerHTML = "Nombre de lancers restants: " + 0;
        }

        ViderOptions();
        DeterminerCombi();

        const cases = Array.from(document.getElementsByClassName(joueur));

        cases.forEach(element => {
            element.addEventListener('click', function handleClick() {
                if(element.classList.contains(joueur)){
                    if(element.classList.contains("option")){
                        element.classList.remove("option");
                        ViderOptions();
                        TotauxSup();
                        TotauxInf();
                        nextJoueur();
                    }
                    else if(element.innerText == "" || element.innerText == null){
                        element.innerText = "0";
                        ViderOptions();
                        TotauxSup();
                        TotauxInf();
                        nextJoueur();
                    }
                }
            });
        });

        etatTour++;
    }
    
    if(nbTour >= 10){
        DeterminerGagnant();
    }
}

function GetPos(de){
	var randomX = Math.floor(Math.random() * 500);
	var randomY = Math.floor(Math.random() * 1000);
	return [randomX,randomY];
}

function DeterminerGagnant(){
    var scores = [0,0,0,0];
    var gagnant;

    for(i = 1 ; i <= joueurs; i++){
        Array.from(document.getElementsByClassName("TotalG")).forEach(element => {
            if(element.classList.contains("Jeu"+i)){
                scores[i-1] = element.innerText;
                if(scores[i-1] == Math.max(scores)){
                    gagnant = i;
                }
            }
        });
    }

    if(joueurs > 1){
        alert("Félicitation "+player[gagnant].nom+"! Vous avez remporté la partie avec un score de "+ scores[gagnant]);
    }
    else{
        alert("Félicitation "+player[gagnant].nom+"! Vous avez score de "+ scores[gagnant]);
    }

}

function Move(id){
    if(etatTour > 0){
        de = document.getElementById(id);
    
        if(!de.classList.contains("active")){
    
            if(desSel[0] == 0){
                de.style.top = "700px";
                de.style.left = "400px";
                de.style.transform = "rotate(0)";
        
                desSel[0] = Array.from(de.id)[1];
                de.classList.toggle("active");
            }
            else if(desSel[1] == 0){
                de.style.top = "700px";
                de.style.left = "500px";
                de.style.transform = "rotate(0)";
        
                desSel[1] = Array.from(de.id)[1];
                de.classList.toggle("active");
            }
            else if(desSel[2] == 0){
                de.style.top = "700px";
                de.style.left = "600px";
                de.style.transform = "rotate(0)";
        
                desSel[2] = Array.from(de.id)[1];
                de.classList.toggle("active");
            }
            else if(desSel[3] == 0){
                de.style.top = "700px";
                de.style.left = "700px";
                de.style.transform = "rotate(0)";
        
                desSel[3] = Array.from(de.id)[1];
                de.classList.toggle("active");
            }
            else{
                de.style.top = "700px";
                de.style.left = "800px";
                de.style.transform = "rotate(0)";
        
                desSel[4] = Array.from(de.id)[1];
                de.classList.toggle("active");
            }
        }
        else{
            for(i = 0; i < 5; i++){
                if(desSel[i] == Array.from(de.id)[1]){
                    desSel[i] = 0;
                    de.classList.remove("active");
            
                    var pos = GetPos(de);
                    de.style.top = pos[0] + 'px';
                    de.style.left = pos[1] + 'px';
                
                    var angle = (Math.floor(Math.random() * 360)) + "deg";
                    de.style.transform = "rotate(" + angle + ")";
                }
            }
            

        }
    }
}

function GetValeurs(){
    var valeurs = [];
    valeurs[0] = document.getElementById("d1").getAttribute("src")[4];
    valeurs[1] = document.getElementById("d2").getAttribute("src")[4];
    valeurs[2] = document.getElementById("d3").getAttribute("src")[4];
    valeurs[3] = document.getElementById("d4").getAttribute("src")[4];
    valeurs[4] = document.getElementById("d5").getAttribute("src")[4];

    return valeurs;
}

function DeterminerCombi(){
    var valeurs = GetValeurs();

    if(IsAs(valeurs) == true){
        var score = 0;
        for (let index = 0; index < valeurs.length; index++) {
            if (valeurs[index] == 1) {
                score = +score + +valeurs[index];
            }

        }

        Array.from(document.getElementsByClassName("As")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = score;
            }
        });

    }
    if(IsDeux(valeurs) == true){
        var score = 0;
        for (let index = 0; index < valeurs.length; index++) {
            if (valeurs[index] == 2) {
                score = +score + +valeurs[index];            }
        }

        Array.from(document.getElementsByClassName("Deux")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = score;
            }
        });
    }
    if(IsTrois(valeurs) == true){
        var score = 0;
        for (let index = 0; index < valeurs.length; index++) {
            if (valeurs[index] == 3) {
                score = +score + +valeurs[index];            }
        }

        Array.from(document.getElementsByClassName("Trois")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = score;
            }
        });
    }
    if(IsQuatre(valeurs) == true){
        var score = 0;
        for (let index = 0; index < valeurs.length; index++) {
            if (valeurs[index] == 4) {
                score = +score + +valeurs[index];            }
        }

        Array.from(document.getElementsByClassName("Quatre")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = score;
            }
        });
    }
    if(IsCinq(valeurs) == true){
        var score = 0;
        for (let index = 0; index < valeurs.length; index++) {
            if (valeurs[index] == 5) {
                score = +score + +valeurs[index];            }
        }

        Array.from(document.getElementsByClassName("Cinq")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = score;
            }
        });
    }
    if(IsSix(valeurs) == true){
        var score = 0;
        for (let index = 0; index < valeurs.length; index++) {
            if (valeurs[index] == 6) {
                score = +score + +valeurs[index];            }
        }

        Array.from(document.getElementsByClassName("Six")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = score;
            }
        });
    }
    if(IsBrelan(valeurs) == true){
        Array.from(document.getElementsByClassName("Brelan")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = +valeurs[0] + +valeurs[1] + +valeurs[2] + +valeurs[3] + +valeurs[4];
            }
        });
    }
    if(IsCarre(valeurs) == true){
        Array.from(document.getElementsByClassName("Carre")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = +valeurs[0] + +valeurs[1] + +valeurs[2] + +valeurs[3] + +valeurs[4];
            }
        });
    }
    if(IsFull(valeurs) == true){
        Array.from(document.getElementsByClassName("Full")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = 25;
            }
        });
    }
    if(IsPetiteSuite(valeurs) == true){
        Array.from(document.getElementsByClassName("PSuite")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = 30;
            }
        });
    }
    if(IsGrandeSuite(valeurs) == true){
        Array.from(document.getElementsByClassName("GSuite")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = 40;
            }
        });
    }
    if(IsYahtzee(valeurs) == true){
        Array.from(document.getElementsByClassName("Yahtzee")).forEach(element => {
            if(element.classList.contains(joueur) && element.innerText == ""){
                element.classList.add("option");
                element.innerText = 50;
            }
        });
    }
    Array.from(document.getElementsByClassName("Chance")).forEach(element => {
        if(element.classList.contains(joueur) && element.innerText == ""){
            element.classList.add("option");
            element.innerText = +valeurs[0] + +valeurs[1] + +valeurs[2] + +valeurs[3] + +valeurs[4];
        }
    });
}

function IsAs(valeurs){
    for (let index = 0; index < valeurs.length; index++) {
        if (valeurs[index] == 1) {
            return true;
        }
    }
    return false;
}

function IsDeux(valeurs){
    for (let index = 0; index < valeurs.length; index++) {
        if (valeurs[index] == 2) {
            return true;
        }
    }
    return false;
}

function IsTrois(valeurs){
    for (let index = 0; index < valeurs.length; index++) {
        if (valeurs[index] == 3) {
            return true;
        }
    }
    return false;
}

function IsQuatre(valeurs){
    for (let index = 0; index < valeurs.length; index++) {
        if (valeurs[index] == 4) {
            return true;
        }
    }
    return false;
}

function IsCinq(valeurs){
    for (let index = 0; index < valeurs.length; index++) {
        if (valeurs[index] == 5) {
            return true;
        }
    }
    return false;
}

function IsSix(valeurs){
    for (let index = 0; index < valeurs.length; index++) {
        if (valeurs[index] == 6) {
            return true;
        }
    }
    return false;
}

function TotauxSup(){
    var total = 0;
    var sectionSup = document.getElementsByClassName(joueur);
    var bonus = 0;
    for(i = 0; i < 6; i++){
        if(sectionSup[i].innerText != "" && !sectionSup[i].classList.contains("option")){
            total = +total + +sectionSup[i].innerText;
        }
    }
    Array.from(document.getElementsByClassName("Total")).forEach(totalSup => {
        if(totalSup.classList.contains(joueur)){
            totalSup.innerText = total;
            Array.from(document.getElementsByClassName("Bonus")).forEach(element => {
                if(element.classList.contains(joueur)){
                    if(total > 63){
                        element.innerText = "35";
                        bonus = 35;
                    }
                    else{
                        element.innerText = 0;
                    }
                }
            });
            Array.from(document.getElementsByClassName("TotalSup")).forEach(element => {
                if(element.classList.contains(joueur)){
                    element.innerText = +total + +bonus;
                }
            });
            Array.from(document.getElementsByClassName("TotalSectionSup")).forEach(element => {
                if(element.classList.contains(joueur)){
                    element.innerText = +total + +bonus;
                }
            });
        }
    });
}

function TotauxInf(){
    var total = 0;
    var sectionInf = document.getElementsByClassName(joueur);
    for(i = 9; i < 16; i++){
        if(sectionInf[i].innerText != "" && !sectionInf[i].classList.contains("option")){
            total = +total + +sectionInf[i].innerText;
        }
    }
    Array.from(document.getElementsByClassName("TotalSectionInf")).forEach(totalInf => {
        if(totalInf.classList.contains(joueur)){
            totalInf.innerText = total;
        }
    });
    Array.from(document.getElementsByClassName("TotalG")).forEach(element => {
        if(element.classList.contains(joueur)){
            var totalG = +total + +sectionInf[17].innerText;
            element.innerText = totalG;
        }
    });
}

function IsBrelan(valeurs){
    valeurs.sort((a,b) => a-b)
    if(valeurs[0] == valeurs[2]){
        return true;
    }
    else if(valeurs[1] == valeurs[3]){
        return true;
    }
    else if(valeurs[2] == valeurs[4]){
        return true;
    }
    else{
        return false;
    }
}

function IsCarre(valeurs){
    valeurs.sort((a,b) => a-b)
    if(valeurs[0] == valeurs[3]){
        return true;
    }
    else if(valeurs[1] == valeurs[4]){
        return true;
    }
    else{
        return false;
    }
}

function IsFull(valeurs){
    valeurs.sort((a,b) => a-b)
    if(valeurs[0] == valeurs[2] && valeurs[3] == valeurs[4] && valeurs[0] != valeurs[4]){
        return true;
    }
    else if(valeurs[0] == valeurs[1] && valeurs[2] == valeurs[4] && valeurs[0] != valeurs[4]){
        return true;
    }
    else{
        return false;
    }
}

function IsPetiteSuite(valeurs){
    valeurs.sort((a,b) => a-b)
    if(valeurs[0] == valeurs[1]-1 && valeurs[1] == valeurs[2] -1 && valeurs[2] == valeurs[3] -1){
        return true;
    }
    else if(valeurs[1] == valeurs[2]-1 && valeurs[2] == valeurs[3] -1 && valeurs[3] == valeurs[4] -1){
        return true;
    }
    else{
        return false;
    }
}

function IsGrandeSuite(valeurs){
    valeurs.sort((a,b) => a-b)
    if(valeurs[0] == valeurs[1]-1 && valeurs[1] == valeurs[2] -1 && valeurs[2] == valeurs[3] -1 && valeurs[3] == valeurs[4] -1){
        return true;
    }
    else{
        return false;
    }
}

function IsYahtzee(valeurs){
    valeurs.sort((a,b) => a-b)
    if(valeurs[0] == valeurs[4]){
        return true;
    }
    else{
        return false;
    }
}

function InfRempli(valeurs){
    
}

function IsTotalGeneral(valeurs){
    
}


function ViderOptions(){
    Array.from(document.getElementsByClassName("option")).forEach(element => {
        element.innerText = "";
        element.classList.remove("option");
    });
}
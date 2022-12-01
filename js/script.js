var etatTour = 0;
const desSel = [0, 0, 0, 0, 0];
var joueur = "Jeu1";

function innit(){
    document.getElementById("table").style.display = "none";
}

function Joueur(nom, val){
    this.nom = nom;
    this.val = val;
}

function start(){
    document.getElementById("choix").style.display = "none";
    var joueurs = document.getElementById("nbJoueurs").value;
    for(let i = 1; i <= joueurs; i++)
    {
        var leJoueur = prompt("Quel est votre nom joueur "+ i +" ?");
        player=new Joueur(leJoueur, i);
    }

    var max = joueurs;
    max++;

    var rand = Math.floor(Math.random() * (max-1)) + 1;

    alert("Ce sera le joueur " + rand + " qui commencera!");

    document.getElementById("table").style.display = "block";
    document.getElementById("titreTable").colSpan = max;

    if(joueurs == "1"){
        var tab = document.getElementsByClassName("Jeu2");
        var numb = document.getElementsByClassName("Jeu2").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }
        tab = document.getElementsByClassName("Jeu3");
        numb = document.getElementsByClassName("Jeu3").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }
        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }
    }
    else if(joueurs == "2"){
        tab = document.getElementsByClassName("Jeu3");
        numb = document.getElementsByClassName("Jeu3").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }
        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }
    }
    else if(joueurs == "3"){
        tab = document.getElementsByClassName("Jeu4");
        numb = document.getElementsByClassName("Jeu4").length;
        for(let i = 0; i < numb; i++){
            tab[i].style.display = "none";
        }
    }
}

function nextJoueur(){
    activePlayer === 1 ? activePlayer = 1 : activePlayer = 0;
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

        DeterminerCombi();
        etatTour++;
    }
}

function GetPos(de){
	var randomX = Math.floor(Math.random() * 500);
	var randomY = Math.floor(Math.random() * 1000);
	return [randomX,randomY];
}

function Selectionner(id){
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
            if(element.classList.contains(joueur)){
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
            if(element.classList.contains(joueur)){
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
            if(element.classList.contains(joueur)){
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
            if(element.classList.contains(joueur)){
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
            if(element.classList.contains(joueur)){
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
            if(element.classList.contains(joueur)){
                element.innerText = score;
            }
        });
    }
    if(SupRempli() == true){

    }
    if(IsBonus() == true){

    }
    if(IsTotalRempli(valeurs) == true){

    }
    if(IsBrelan(valeurs) == true){

    }
    if(IsCarre(valeurs) == true){

    }
    if(IsFull(valeurs) == true){

    }
    if(IsPetiteSuite(valeurs) == true){

    }
    if(IsGrandeSuite(valeurs) == true){

    }
    if(IsYahtzee(valeurs) == true){

    }
    // Chance
    if(InfRempli() == true){

    }
    if(IsTotalGeneral() == true){

    }
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

function SupRempli(valeurs){
    
}

function IsBonus(valeurs){
    
}

function IsTotalRempli(valeurs){
    
}

function IsBrelan(valeurs){
    
}

function IsCarre(valeurs){
    
}

function IsFull(valeurs){
    
}

function IsFull(valeurs){
    
}

function IsPetiteSuite(valeurs){
    
}

function IsGrandeSuite(valeurs){
    
}

function IsYahtzee(valeurs){
    
}

function InfRempli(valeurs){
    
}

function IsTotalGeneral(valeurs){
    
}

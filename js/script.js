var etatTour = 0;
const desSel = [false, false, false, false, false];

function innit(){
}

function Lancer(){
    var nbDes;

    if(etatTour == 0){
        nbDes = 5;
    }
    else{
        nbDes = GetNombreDes();
    }

    for(let i = 1; i <= nbDes ; i++){
        de = document.getElementById("d"+i);
        var pos = GetPos(de);
        de.style.top = pos[0] + 'px';
        de.style.left = pos[1] + 'px';

        var angle = (Math.floor(Math.random() * 360)) + "deg";
        de.style.transform = "rotate(" + angle + ")";

        var valeur = Math.floor(Math.random() * (7 - 1) + 1);
        de.src="img/"+valeur+".png";

        de.style.display = "block";
        
    }

    etatTour++;
}

function GetNombreDes(){
    var nbDes = 0;
    for(let i = 1; i <= 5; i++){
        if(document.getElementById("d"+i).style.backgroundColor == "white"){
            nbDes++;
        }
    }

    return nbDes;
}

function GetPos(de){
	var randomX = Math.floor(Math.random() * 100);
	var randomY = Math.floor(Math.random() * 1000);
	return [randomX,randomY];
}

function Selectionner(id){
    de = document.getElementById(id);

    if(de.style.backgroundColor == "white"){

        if(desSel[0] == false){
            de.style.top = "650px";
            de.style.left = "400px";
            de.style.transform = "rotate(0)";
    
            desSel[0] = true;
            de.style.backgroundColor = "blue";
        }
        else if(desSel[1] == false){
            de.style.top = "570px";
            de.style.left = "500px";
            de.style.transform = "rotate(0)";
    
            desSel[1] = true;
            de.style.backgroundColor = "blue";
        }
        else if(desSel[2] == false){
            de.style.top = "490px";
            de.style.left = "600px";
            de.style.transform = "rotate(0)";
            de.style.backgroundColor = "blue";
    
            desSel[2] = true;
            de.style.backgroundColor = "blue";
        }
        else if(desSel[3] == false){
            de.style.top = "410px";
            de.style.left = "700px";
            de.style.transform = "rotate(0)";
    
            desSel[3] = true;
            de.style.backgroundColor = "blue";
        }
        else{
            de.style.top = "330px";
            de.style.left = "800px";
            de.style.transform = "rotate(0)";
    
            de.style.backgroundColor = "blue";
        }
    }
    else{
        de.style.backgroundColor = "white";
    }
}
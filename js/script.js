function innit(){
    getElementById("1").style.display = "none";
    getElementById("2").style.display = "none";
    getElementById("3").style.display = "none";
    getElementById("4").style.display = "none";
    getElementById("5").style.display = "none";
}

function Lancer(){
    var nbDes = GetNombreDes();
}

function GetNombreDes(){
    var nbDes = 0;
    for(let i = 0; i < 5; i++){
        if(document.getElementById(i).visibility != hidden){
            nbDes++;
        }
    }

    return nbDes;
}
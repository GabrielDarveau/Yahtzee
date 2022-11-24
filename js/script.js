function innit(){

}

function Lancer(){
    var nbDes = GetNombreDes();

}

function GetNombreDes(){
    var nbDes = 0;
    for(let i = 0; i < 5; i++){
        if(document.getElementById(i).style.display == block){
            nbDes++;
        }
    }

    return nbDes;
}
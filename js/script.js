var etatTour = 0;
const desSel = [0, 0, 0, 0, 0];

function innit(){
}

function Lancer(){

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

    etatTour++;
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
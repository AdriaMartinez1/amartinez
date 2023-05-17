
let puntuacio=0;
let temps=10000;
let aleatori = 1;
const audio = new Audio("boing.mp3");
function jocs() {

  
    let timerID = setInterval(AccioRandon, 1000);
    setTimeout(() => {clearInterval(timerID); alert("joc finalitzat"); }, 10000);
    }

function AccioRandon()
{
    temps = temps -1000;
    document.getElementById("p1").innerHTML=temps/1000;
    document.getElementById(aleatori).src="topoNo.jpg";
    aleatori = Math.trunc((Math.random() *(12))+1);
    document.getElementById(aleatori).src="topoSi.jpg";

}

    function hit(el){
        if ( aleatori == el ) 
            puntuacio = puntuacio+10;

        else
            puntuacio = puntuacio-10;
            document.getElementById("p2").innerHTML=puntuacio;
        document.getElementById(el).src="topoPam.jpg";
        
audio.play();
        setTimeout(function(){ restableix(el);},1000);
    }

    function restableix(posicio){
        document.getElementById(posicio).src="topoNo.jpg";

    }


    alert("Comença el joc!");
    jocs();

let temps=100000;
let aleatori = 0;
let preguntesCont=0;
let puntuacio=0;
let timerID;
let quiz= [
        {pregunta:"Què mostrarà?", opcio1:"NaN", opcio2:"15", opcio3 : "105", respcorrecte : 3, conestada: 0},
        {pregunta:"Aquest codi funciona?", opcio1:"Sí i mostra 10", opcio2:"Sí i mostra 25", opcio3 : "No", respcorrecte : 1, conestada: 0},
        {pregunta:"Aquest codi funciona?", opcio1:"No", opcio2:"sí i mostra: 7", opcio3 : "sí i mostra  52", respcorrecte : 3, conestada: 0},
        {pregunta:"Quin valor mostrarà alert?", opcio1:"1", opcio2:"5", opcio3 : "0", respcorrecte : 3, conestada: 0},
        {pregunta:"Aquest codi funciona?", opcio1:"No", opcio2:"sí i mostra  0", opcio3 : "sí i mostra 12", respcorrecte : 3, conestada: 0},
        {pregunta:"Quin valor mostra?", opcio1:"true", opcio2:"2 €", opcio3 : "10 €", respcorrecte : 2, conestada: 0},
        {pregunta:"Quin valor mostra alert?", opcio1:"8", opcio2:"6", opcio3 : "5", respcorrecte : 1, conestada: 0},
        {pregunta:"Què mostrarà per pantalla?", opcio1:"Volvo Saab Ford", opcio2:"Saab Ford", opcio3 : "Ford", respcorrecte : 2, conestada: 0},
        {pregunta:"Què mostrarà a la pantalla?", opcio1:"Juanito", opcio2:"Maria", opcio3 : "Juanito Maria", respcorrecte : 2, conestada: 0},
        {pregunta:"Què mostrarà l’alert?", opcio1:"L1", opcio2:"L2", opcio3 : "demo2", respcorrecte : 2, conestada: 1}

];

jocs();
MostrarPreg();


function jocs() {


    timerID = setInterval(Cronometre, 1000);
    setTimeout(() => {clearInterval(timerID); ResumPartida(); }, 100000);
    }


    function Cronometre()
{
    temps = temps -1000;
    document.getElementById("p1").innerHTML=temps/1000;

}


function ResumPartida()
{
    alert("joc finalitzat. Has tret :" + puntuacio + " punts");   
}




function MostrarPreg(){
    
    if((preguntesCont<(quiz.length-1)))
    {
        
        aleatori = Math.trunc(Math.random() *(quiz.length));
        
        while(quiz[aleatori].conestada==1)
        {   
            aleatori=( aleatori+1) % quiz.length;
           
        }
     document.getElementById("preg").innerHTML=quiz[aleatori].pregunta;
     document.getElementById("v1").innerHTML=quiz[aleatori].opcio1;
     document.getElementById("v2").innerHTML=quiz[aleatori].opcio2;
     document.getElementById("v3").innerHTML=quiz[aleatori].opcio3;
     document.getElementById("imatge").src=((aleatori+1)+".png");

     document.getElementById("radio1").checked = false;
     document.getElementById("radio2").checked = false;
     document.getElementById("radio3").checked = false;
     document.getElementById("radio3").checked = false;
     document.getElementById("enviar").disabled = true;


    } else
    {
        alert("Ja no hi ha més preguntes...");
        clearInterval(timerID); 
        ResumPartida();
    }
    
}

function Contestar(){
    preguntesCont=preguntesCont+1;
    quiz[aleatori].conestada=1;
    if (document.querySelector('input[name="status"]:checked').value == quiz[aleatori].respcorrecte)
        {
            puntuacio = puntuacio + 10;
            
        } else
        {
       
        }
    MostrarPreg();
}


function ActivarEnviar()
{
    document.getElementById("enviar").disabled = false;
}


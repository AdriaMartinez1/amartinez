$(document).ready(
    function() {
        setInterval(() => {
            moveRocket();            
        }, 300);
    }
);
var counter = 10;
var final = false;
var inici = true;
function moveRocket() {
    if (counter == 90) {    
        final = true;
        $('.fa-rocket').css("transform","rotate(220deg)");
        inici = false;
    }
    if (counter == 0) {
        $('.fa-rocket').css("transform","rotate(45deg)");
        final = false;
        inici = true;
    }
    if (counter > 50 && counter < 100) {
        $('.fa-rocket').css("color","#48a9af");
    } else {
        $('.fa-rocket').css("color","white");

    }
    if (final) {
        $('.fa-rocket').css("left",counter+"vw");
        counter -= 5;
    }else if (inici) {
        $('.fa-rocket').css("left",counter+"vw");
        counter += 5;    
    }
    console.log(counter);
}
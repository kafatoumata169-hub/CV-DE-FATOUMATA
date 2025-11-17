const texts = "fatoumata KA";
const speed = 50;
let cv=0;
function typeWriter()
{if(cv<texts.length){
    document.getElementById("demo").innerHTML+=texts.charAt(cv);
    cv++;
    setTimeout(typeWriter,speed);
    setTimeout(typeWriter,speed);
}
}

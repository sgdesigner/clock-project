let date;
let time;
let a;
setInterval(() => {
    a = new Date();
time =a.getHours()+ " : " + a.getMinutes()+ " : " + a.getSeconds()  ;
date= a.toLocaleDateString();
document.getElementById("id1").innerHTML=" DATE-> ";
document.getElementById("id2").innerHTML=date;
document.getElementById("id3").innerHTML="Time->";
document.getElementById("id4").innerHTML=a.getHours();
document.getElementById("id5").innerHTML=" :";
document.getElementById("id6").innerHTML=a.getMinutes();
document.getElementById("id7").innerHTML=" : ";
document.getElementById("id8").innerHTML=a.getSeconds();

}, 1000);
var num=0;
var containerr=document.getElementById("con");
 
var btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    var a=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var c=Math.floor(Math.random()*255);
    containerr.style.backgroundColor="rgb("+a+","+b+","+c+")";
    alert(a,b,c)
 
     
})
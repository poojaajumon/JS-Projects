



 
function sum(){
    var a=document.getElementById("num1").value 
    var b= document.getElementById("num2").value 
   var a1=parseInt(a)
   var b1=parseInt(b)
    var c= document.getElementById("result")
    c.innerHTML=a1+b1
   
}
function sub(){
    var a=document.getElementById("num1").value 
    var b= document.getElementById("num2").value 
   var a1=parseInt(a)
   var b1=parseInt(b)
    var c= document.getElementById("result")
    c.innerHTML=a1-b1
}
function mul(){
    var a=document.getElementById("num1").value 
    var b= document.getElementById("num2").value 
   var a1=parseInt(a)
   var b1=parseInt(b)
    var c= document.getElementById("result")
    c.innerHTML=a1*b1
}
function div(){
    var a=document.getElementById("num1").value 
    var b= document.getElementById("num2").value 
   var a1=parseInt(a)
   var b1=parseInt(b)
    var c= document.getElementById("result")
    c.innerHTML=a1/b1
}
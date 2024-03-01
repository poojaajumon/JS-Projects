


    var a=0
    var b=10
    
    var d=10
    var f=10
    var m=10
function abc(){

    
     b=b-1
     document.getElementById("stock1").textContent="stock" +b

     
     
     if(b>0){


        var i=1
    a=a+i

 
    document.getElementById("num").innerText=a

    m=m+199
     document.getElementById("inp1").textContent=m

     
        //  localStorage
     let z=document.getElementById("num").innerText
     localStorage.setItem("number",z)

     let p=document.getElementById("stock1").innerText
     localStorage.setItem("stock1",p)

     let k=document.getElementById("inp1").textContent
     localStorage.setItem("amount",k)

       
     }else{
        let out1=document.getElementById("stock1")
        out1.textContent="out of stock"
        out1.style.color="red"
        

     }
     

    
   
   



}
function abc1(){
  
     d=d-1
     document.getElementById("stock2").textContent="stock" +d

    
     if(d>0){
        var i=1
        a=a+i
        
       
        document.getElementById("num").innerText=a

        m=m+299
        document.getElementById("inp1").textContent=m
         
        let y=document.getElementById("num").innerText
        localStorage.setItem("number",y)
   
        let q=document.getElementById("stock2").innerText
        localStorage.setItem("stock2",q)
   
        let l=document.getElementById("inp1").textContent
        localStorage.setItem("amount",l)
   
       
     }
     else{
        let out2=document.getElementById("stock2")
        out2.textContent="out of stock"
        out2.style.color="red"

     }
     

    


}
function abc2(){
   
    
     f=f-1
     document.getElementById("stock3").textContent="stock" +f

     
     if(f<0){
        var i=1
        a=a+i
        
       
        document.getElementById("num").innerText=a

        m=m+399
     document.getElementById("inp1").textContent=m
        let x=document.getElementById("num").innerText
     localStorage.setItem("number",x)

     let r=document.getElementById("stock3").innerText
     localStorage.setItem("stock3",r)

     let n=document.getElementById("inp1").textContent
     localStorage.setItem("amount",n)

     }
     else{
        let out3=document.getElementById("stock3")
        out3.textContent="out of stock"
        out3.style.color="red"
    

     }
    

     



}
// refreshing all the elements
// Get the button element by its id
var button = document.getElementById("refresh");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the cart element by its id
  var cart = document.getElementById("num");
  
  

  // Clear the cart contents
   cart.innerHTML = "";
//    clear stock
   var st1= document.getElementById("stock1");
  st1.innerHTML="stock 10"
  var st2= document.getElementById("stock2");
  st2.innerHTML="stock 10"
  var st3= document.getElementById("stock3");
  st3.innerHTML="stock 10"
//   clear amount
var amount=document.getElementById("inp1");
amount.innerHTML=""

localStorage.removeItem("number")
num.innerHTML=""

localStorage.removeItem("stock1")
stock1.innerHTML=""
localStorage.removeItem("stock2")
stock2.innerHTML=""
localStorage.removeItem("stock3")
stock3.innerHTML=""

localStorage.removeItem("amount")
inp1.innerHTML=""




})



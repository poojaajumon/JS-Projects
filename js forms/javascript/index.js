function validate(){
    let name=document.getElementById("Name").value
    let mail=document.getElementById("mail").value
    let number=document.getElementById("phone").value
    
    
    
    
    if(name=="" ){
        alert("please fill the column")

    }
   var name1=/^[a-zA-Z]+ [a-zA-Z]+$/;
      if (!name1.test(name)) {
        var a=document.getElementById("one");
        a.innerText="Name should be char"
        a.style.color="red"
        return false;
    }

    var email1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!email1.test(mail)) {
        var c=document.getElementById("two")
        c.innerHTML="Email should be valid";
        c.style.color="red"
         return false;
     }
    const phone1=/^[6-9]\d{9}$/;
     if (number.length<10) {
        
        var b=document.getElementById("three")
        b.innerText="Number length should be 10"
        b.style.color="red"
        return false;
    }
   
    
      else{
      return true;
    }
  
    

}
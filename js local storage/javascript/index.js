// function add(){
//     var data=document.getElementById("para").value
//      localStorage.setItem("name",data)
// }
// function read(){
//     var a=localStorage.getItem("name")
//     document.getElementById("para2").innerHTML=a;
// }
// function remove(){
//     localStorage.removeItem("name")
//     para2.innerHTML=""
// }

// task 41


// function add(){
//     var arr=[]
    
//  data= document.getElementById("head").value
//    arr.push(data)
//   var b= localStorage.setItem("planner",JSON.stringify(arr))

//   var c=localStorage.getItem("planner",JSON.stringify(arr))
//    var d=JSON.parse(c)

 
//  var test=document.createElement('section');
//  test.setAttribute('id','test');
 
//  var ul=document.createElement('ul');
 
 
//  document.body.appendChild(test);
//  test.appendChild(ul);
 
//  for (var i=0; i<array.length; i++){
 
//      var li=document.createElement('li');
 
//      ul.appendChild(li);
//     li.innerHTML=li.innerHTML + array[i];

 
//  }


// }

list=document.getElementById("lis")
var arr=[]
function add(){
    var data=document.getElementById("text1").value
    arr.push(data)
    localStorage.setItem("myplanner",JSON.stringify(arr))
    var l=document.createElement("li")
    var b=document.createElement("button")
   //  b.innerHTML = "Delete";
   //  b.className='button';
    b.onclick=function () 
    {
        my=JSON.parse(localStorage.getItem("myplanner"));           
        var index = my.indexOf(data);
        my.splice(index, 1);
        localStorage.setItem('myplanner',JSON.stringify(my))
        l.remove();  
    };
    for(var i=0;i<arr.length;i++)
    {
        l.innerHTML=arr[i]
        l.append(b)
        list.append(l)
    }
}
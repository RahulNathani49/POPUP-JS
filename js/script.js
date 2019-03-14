function popup(){
    x = document.getElementById("main-display");
    x.style.display="block";
}
function removepopup(){
    var y = document.getElementById("main-display");
    y.style.display="none";
}
function submitt(){
    var a = document.getElementById("textt").value;
    var b = document.getElementById("emaill").value; 
    document.getElementById("name").textContent = "YOUR NAME : " + a;
     document.getElementById("email").textContent ="YOUR EMAIL : " + b;
    
   var y = document.getElementById("main-display");
    y.style.display="none";
}
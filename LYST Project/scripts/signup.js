

 document.getElementById("form").addEventListener("submit",myfunc);

 var ProdArr=JSON.parse(localStorage.getItem("Lyst"))||[];

 function myfunc(){
    event.preventDefault();

    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;

    console.log(email,password)


    function Product(email,password){
        this.email=email;
        this.password=password;
    }

    var prod=new Product(email,password);
    ProdArr.push(prod);
    console.log(ProdArr);
    localStorage.setItem("Lyst",JSON.stringify(ProdArr));
    alert("Signup is sucessfull")
    window.location.href="login.html"

 }

 
  let getItem=JSON.parse(localStorage.getItem("Lyst"))||[];


  document.getElementById("form").addEventListener("submit",myfunc);

  function myfunc(){
    event.preventDefault();

    var email=document.getElementById("email").value;

    console.log(email)


    function Product(email){
        this.email;
    }
    var prod=new Product(email);
    getItem.push(prod);
    console.log(getItem);
    localStorage.setItem("Lyst",JSON.stringify(getItem));
    alert("Login successfull")
    window.location.href="index1.html"
  }


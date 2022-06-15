

document.getElementById("form").addEventListener("submit",myfunc);

var ProdArr=JSON.parse(localStorage.getItem("cart"));

function myfunc(){
    event.preventDefault();

    var name=document.getElementById("name").value;
    var card=document.getElementById("card").value
    var date=document.getElementById("date").value
    var cvv=document.getElementById("cvv").value
    

    // console.log(name,card,date,cvv)

    function Product(name,card,date,cvv){
        this.name=name;
        this.card=card;
        this.date=date;
        this.cvv=cvv;
    }

    var prod=new Product(name,card,date,cvv);
    ProdArr.push(prod);
    console.log(ProdArr);
    localStorage.setItem("cart",JSON.stringify(ProdArr));
    alert("Payment is succesfull")
    window.location.href="index1.html"
}
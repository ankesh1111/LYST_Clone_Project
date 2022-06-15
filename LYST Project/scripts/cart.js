

var cartData=JSON.parse(localStorage.getItem("cart"));

console.log(cartData)

var total=cartData.reduce(function(sum,ele,index,arr){

  return sum+Number(ele.price)
},0)

var length=cartData.length;

console.log(length);

console.log(total);

document.querySelector(
  "p"
).innerText = `You have ${length} items in cart and  total is Rs ${total}`;

 
cartData.map(function (elem, index) {
    var div= document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("h3");
    name.textContent = elem.name;

    var price = document.createElement("h4");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    });

div.append(img, name, price, btn);

    document.getElementById("container").append(div);
  });

  function removeItem(ele,index){
    console.log(ele,index);
    cartData.splice(index,1);
    console.log(cartData);
    localStorage.setItem("cart",JSON.stringify(cartData));
    window.location.reload();
  }

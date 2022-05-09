
var elm=JSON.parse(localStorage.getItem("displayCart"));
console.log(elm);
var img=document.createElement("img");
img.setAttribute("src", elm.img);
var p1=document.createElement("p");
p1.innerText=elm.title;
var h4=document.createElement("h4");
h4.innerText=elm.heading;
var p2=document.createElement("p");
p2.innerText="€ "+elm.price;
var display=document.querySelector("#container>#disImg");
display.append(img);
document.querySelector("#text").append(p1, h4, p2)




document.querySelector("#checkout").addEventListener("click",mycheckout)

function mycheckout(){
    window.location.href="address.html"
}

document.querySelector("#cshopping").addEventListener("click",continueShopping)

function continueShopping(){
    window.location.href="productPage.html"
}


var arr=JSON.parse(localStorage.getItem("mensData"));
var lableArray=JSON.parse(localStorage.getItem("menslable"));
var sizeArray=JSON.parse(localStorage.getItem("mensSize"));
var colorArray=JSON.parse(localStorage.getItem("mensColor"));
var patternArray=JSON.parse(localStorage.getItem("mensPattern"));


 
arr.forEach(function (elm){
    var box1=document.createElement("div");
    document.querySelector("#productGrid").append(box1);
    var box2=document.createElement("div");
    box2.setAttribute("class", "flexMode");
    box1.append(box2);
    var newArrival=document.createElement("span");
    newArrival.setAttribute("class","newArr")
    newArrival.innerText="NEW ARRIVAL";
    var i=document.createElement("i");
    i.setAttribute("class", "fi fi-rs-star");
    var anchorPic=document.createElement("a");
    anchorPic.setAttribute("href", "cart.html");
    var productPic=document.createElement("img");
    productPic.setAttribute("src", elm.img);
    var brandName=document.createElement("p");
    brandName.innerText=elm.title;
    var brandHeading=document.createElement("h4");
    brandHeading.innerText=elm.heading;
    var brandPrice=document.createElement("p");
    brandPrice.innerText="€ "+elm.price;
    
    anchorPic.append(productPic)
    box2.append(newArrival, i);
    box1.append(anchorPic,brandName, brandHeading, brandPrice)
});

lableArray.forEach(function(el){
    var inputCheck=document.createElement("input");
    inputCheck.setAttribute("type","checkbox");
    inputCheck.setAttribute("class","inputTic");
    var lable=document.createElement("lable");
    lable.innerText=el;
    var br=document.createElement("br");
    document.querySelector("#scrollBox").append(inputCheck, lable, br)
})
sizeArray.forEach(function(el){
    var inputCheck=document.createElement("input");
    inputCheck.setAttribute("type","checkbox");
    inputCheck.setAttribute("class","inputTic");
    var lable=document.createElement("lable");
    lable.innerText=el;
    var br=document.createElement("br");
    document.querySelector("#size").append(inputCheck, lable, br)
})

colorArray.forEach(function(el){
    var inputCheck=document.createElement("input");
    inputCheck.setAttribute("type","checkbox");
    inputCheck.setAttribute("class","inputTic");
    var lable=document.createElement("lable");
    lable.innerText=el;
    var br=document.createElement("br");
    document.querySelector("#colours").append(inputCheck, lable, br)
})

patternArray.forEach(function(el){
    var inputCheck=document.createElement("input");
    inputCheck.setAttribute("type","checkbox");
    inputCheck.setAttribute("class","inputTic");
    var lable=document.createElement("lable");
    lable.innerText=el;
    var br=document.createElement("br");
    document.querySelector("#pattern").append(inputCheck, lable, br)
})
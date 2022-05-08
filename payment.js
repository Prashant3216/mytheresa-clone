document.querySelector("#butn>div+div").addEventListener("click", checkdetail)

function checkdetail(){
    event.preventDefault()
 
    var data={
        name:document.querySelector("#name").value,
        credit:document.querySelector("#number").value,
        expire:document.querySelector("#expire").value,
        cvv:document.querySelector("#cvv").value
    }

    console.log(data)

    if(data.name=='' || data.credit=='' || data.expire=='' || data.cvv=='')
    {
        alert("Please fill card details")
    }
    else
    {
        alert("Order is Successfully placed")
        window.location.href="mensPage.html"
    }

}

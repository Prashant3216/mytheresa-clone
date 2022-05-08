
document.querySelector("#butn>div + div").addEventListener("click",checkaddress)

function checkaddress(){
    event.preventDefault()

    var data={
        title:document.querySelector("#title").value,
        name:document.querySelector("#name").value,
        last:document.querySelector("#last").value,
        company:document.querySelector("#company").value,
        street:document.querySelector("#street").value,
        address2:document.querySelector("#address2").value,
        postcode:document.querySelector("#postcode").value,
        country:document.querySelector("#country").value,
        mobile:document.querySelector("#mobile").value
    }


    if(data.title=='' || data.name=='' || data.last=='' || data.street=='' || data.postcode=='' || data.country=='' || data.mobile=='')
    {
        alert("Please fill full address")
    }
    else
    {
        window.location.href="payment.html"
    }

}

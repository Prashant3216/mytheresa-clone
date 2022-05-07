var login=JSON.parse(localStorage.getItem("information"))

console.log(login)

document.querySelector("#black").addEventListener("click",myFun)

function myFun(){
 
   var a=document.querySelector("#email1").value;
   var b=document.querySelector("#password1").value
   console.log(a,b)
 
    var flag=true;
    if(login==null)
    {
        alert("Please Create an account")
    }
    else{
        for(var i=0; i<login.length;i++)
        {
            if(login[i].email==a && login[i].password==b)
            {    flag=false
                alert("Login successfull")
                // prof.push(login[i].first)
                localStorage.setItem("profile",login[i].first)
                window.location.href="navbar.html"
                break;
            }
           
        }
    }
    if(flag==true){
        alert("incorrect credential")
    }
   
 

}


document.querySelector("#register").addEventListener("click",clickme)
var info=JSON.parse(localStorage.getItem("information")) || []

function clickme(){
    alert("registered successfully")
    event.preventDefault()
    // console.log("go on")


    var data={
        academic:document.querySelector("#title").value,
        first:document.querySelector("#name").value,
        last:document.querySelector("#last").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        cpassword:document.querySelector("#cpassword").value
    }
    // console.log(data)
    info.push(data)
    localStorage.setItem("information",JSON.stringify(info))
    window.location.reload()
}
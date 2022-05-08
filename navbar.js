

    var prof = (localStorage.getItem("profile"))
    console.log(prof)
    if (prof != null) {
        document.querySelector("#chn").innerHTML = ""
        document.querySelector("#chn").innerHTML = prof

    }
    else {
        document.querySelector("#chn").innerHTML = "My Account"

    }



    var prof = (localStorage.getItem("profile"))
    if (prof != null) {
        document.querySelector("#chn").innerHTML = ""
        document.querySelector("#chn").innerHTML = prof

    }
    else {
        document.querySelector("#chn").innerHTML = "My Account"

    }

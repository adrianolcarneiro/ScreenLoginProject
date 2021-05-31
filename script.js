var login = document.getElementById("btLogin")
var card01 = document.getElementById("card01")
var card02 = document.getElementById("card02")
var icon = document.getElementById("icon01")
var box = document.getElementById("box")
var txSucess = document.getElementById("sucess")

function Clique(id) {

    card01.classList.add("loginLeft")
    card02.classList.add("loginRight")
    box.classList.add("fade")
    icon.classList.add("entranceRot")
}

function Login(id) {
    var login = document.getElementById("txLogin")
    var password = document.getElementById("txPassword")

    if (login.value === "" || password.value === "") {
        alert("Por favor, preencha todos os campos!")
    }
    else {

        box.classList.add("fadeOut")
        icon.classList.add("sucess")
        txSucess.classList.add("show")       
        
    }
}

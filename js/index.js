document.getElementById("login").addEventListener("click", acceder);

function acceder() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (leerCookie(username, password) == true) {
        document.cookie = "login=" + username;
        window.location.href = "./menu.html";
    } else {
        document.getElementById("error").style.display = "";
    }

}

function leerCookie(name, password) {

    var valido = false;
    var arrayCookies = document.cookie.split("; ");
    var claveValor = [];
    arrayCookies.forEach(element => {
        claveValor.push(element.split("="));
    });

    for (let i = 0; i < claveValor.length; i++) {
        if (claveValor[i][0] == name && claveValor[i][1] == password) {
            valido = true;
        }
    }
    return valido;
}

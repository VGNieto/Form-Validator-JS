var usuario;
function comprobarUsuario() {
    var existe = false;
    
    var arrayCookies = document.cookie.split("; ");
    var claveValor = [];
    arrayCookies.forEach(element => {
        claveValor.push(element.split("="));
    });

    for (let i = 0; i < claveValor.length; i++) {
        if (claveValor[i][0] == "login") {
            existe = true;
            usuario = claveValor[i][1];
            
        }
    }

    if (!existe) {
        document.location.href = "./index.html";
    }
} 


function borrarCookie() {
    var d = new Date();
    d.setTime(d.getTime() - (1000 * 60 * 60 * 24));
    var fecha = "expires=" + d.toGMTString();
    window.document.cookie = "login" + "=" + "; " + fecha;
    window.location.href = "./index.html";

}

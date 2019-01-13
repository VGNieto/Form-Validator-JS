var nombre = new RegExp("^[a-zA-Z][a-zA-Z]{1,10}$");
var apellidos = new RegExp("^[a-zA-Z][a-zA-Z]{1,10}$");
var usuario = new RegExp("^[a-zA-Z][a-zA-Z]+@pufo\.es$");
var telefono = new RegExp("^[6|7]+[0-9]{8}$");
var contrasena = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?¿!@$%^&*-]).{8,}$");

var correctos = {
    "errorContraseñas": false, "errorContraseña": false, "errorSalario": false, "errorTelefono": false, "errorFecha": false, "errorJefe": false,
    "errorTrabajo": false, "errorUsuario": false, "errorApellido": false, "errorNombre": false
};


function eventoCambio() {

    switch (this.id) {
        case "nombre": if (!nombre.test(this.value)) {
            this.className = "error";
            document.getElementById("errorNombre").style.display = "";
            correctos["errorNombre"] = false;
        } else {
            this.className = "";
            document.getElementById("errorNombre").style.display = "none";
            correctos["errorNombre"] = true;

        }
            break;
        case "apellidos": if (!apellidos.test(this.value)) {
            this.className = "error";
            document.getElementById("errorApellido").style.display = "";
            correctos["errorApellido"] = false;
        } else {
            this.className = "";
            document.getElementById("errorApellido").style.display = "none";
            correctos["errorApellido"] = true;

        }
            break;
        case "usuario": if (!usuario.test(this.value)) {
            this.className = "error";
            document.getElementById("errorUsuario").style.display = "";
            correctos["errorUsuario"] = false;


        } else {
            this.className = "";
            document.getElementById("errorUsuario").style.display = "none";
            correctos["errorUsuario"] = true;

        }
            break;
        case "trabajo": if (this.value == "elegirUno") {
            this.className = "error";
            document.getElementById("errorTrabajo").style.display = "";
            correctos["errorTrabajo"] = false;

        } else {
            this.className = "";
            document.getElementById("errorTrabajo").style.display = "none";
            correctos["errorTrabajo"] = true;

        }
            break;
        case "jefe": if (this.value == "elegirUno") {
            this.className = "error";
            document.getElementById("errorJefe").style.display = "";
            correctos["errorJefe"] = false;

        } else {
            this.className = "";
            document.getElementById("errorJefe").style.display = "none";
            correctos["errorJefe"] = true;

        }
            break;
        case "fechacontrato":
            var fechaActual = new Date();
            var tonto = fechaActual.getTime();
            console.log(tonto);
            if (this.valueAsNumber < 946684800000 || this.valueAsNumber > tonto) {
                this.className = "error";
                document.getElementById("errorFecha").style.display = "";
                correctos["errorFecha"] = false;

            } else {
                this.className = "";
                document.getElementById("errorFecha").style.display = "none";
                correctos["errorFecha"] = true;

            }

            break;
        case "telefono": if (this.value == "") {
            this.className = "";
            document.getElementById("errorTelefono").style.display = "none";
            correctos["telefono"] = true;
        } else if (!telefono.test(this.value)) {
            this.className = "error";
            document.getElementById("errorTelefono").style.display = "";
            correctos["errorTelefono"] = false;


        } else {
            this.className = "";
            document.getElementById("errorTelefono").style.display = "none";
            correctos["errorTelefono"] = true;

        }
            break;
        case "salario": if (this.value < 858.55 || this.value > 12000) {
            this.className = "error";
            document.getElementById("errorSalario").style.display = "";
            correctos["errorSalario"] = false;

        } else {
            this.className = "";
            document.getElementById("errorSalario").style.display = "none";
            correctos["errorSalario"] = true;

        }
            break;
        case "contraseña": if (!contrasena.test(this.value)) {
            this.className = "error";
            document.getElementById("errorContraseña").style.display = "";
            correctos["errorContraseña"] = false;

        } else {
            this.className = "";
            document.getElementById("errorContraseña").style.display = "none";
            correctos["errorContraseña"] = true;

        }
            break;
        case "contraseña1": if (this.value !== document.getElementById("contraseña").value) {
            this.className = "error";
            document.getElementById("errorContraseñas").style.display = "";
            correctos["errorContraseñas"] = false;

        } else {
            this.className = "";
            document.getElementById("errorContraseñas").style.display = "none";
            correctos["errorContraseñas"] = true;

        }
            break;
    }


}


function comprobarCampos() {


    let fallos = 0;
    for (const key in correctos) {
        if (correctos.hasOwnProperty(key)) {
            const element = correctos[key];
            if (element !== true) {
                if (key == "errorTelefono") {
                    if (campoTelefono.value !== "") {
                        fallos++;
                    } else {
                        document.getElementById(key).style.display = "none";

                    }
                } else {
                    fallos++;
                    document.getElementById(key).style.display = "";
                }
            }
        }
    }
    
    if (fallos == 0) {
        document.getElementById("resultado").textContent = "Usuario creado correctamente.";
        document.cookie = campoUsuario.value + "=" + campoContraseña.value;

    }


}

var campoNombre = document.getElementById("nombre"); campoNombre.addEventListener("keyup", eventoCambio);
var campoApellidos = document.getElementById("apellidos"); campoApellidos.addEventListener("keyup", eventoCambio);
var campoUsuario = document.getElementById("usuario"); campoUsuario.addEventListener("keyup", eventoCambio);
var campoTrabajo = document.getElementById("trabajo"); campoTrabajo.addEventListener("change", eventoCambio);
var campoJefe = document.getElementById("jefe"); campoJefe.addEventListener("change", eventoCambio);
var campoFechaContrato = document.getElementById("fechacontrato"); campoFechaContrato.addEventListener("change", eventoCambio);
var campoTelefono = document.getElementById("telefono"); campoTelefono.addEventListener("keyup", eventoCambio);
var campoSalario = document.getElementById("salario"); campoSalario.addEventListener("keyup", eventoCambio);
var campoContraseña = document.getElementById("contraseña"); campoContraseña.addEventListener("keyup", eventoCambio);
var campoContraseña1 = document.getElementById("contraseña1"); campoContraseña1.addEventListener("keyup", eventoCambio);
var campoEnviar = document.getElementById("registrar"); campoEnviar.addEventListener("click", comprobarCampos);




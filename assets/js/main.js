function suscripcion() {
    var formulario = document.getElementById('formulario');
    console.log(formulario.classList);
    console.log(formulario.className.split(' '));
    if (formulario.className.split(' ').indexOf('escondido') != -1) {
        formulario.classList.remove('escondido');
    } else {
        formulario.classList.add('escondido');
        //validaciones
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var direccion = document.getElementById('direccion').value;

        if (nombre == '' || email == '' || direccion == '') {
            alert('Debes ingresar todos los campos');
            formulario.classList.remove('escondido');
        } else {
            alert('Muchas gracias por suscribirte');
        }
    }
}
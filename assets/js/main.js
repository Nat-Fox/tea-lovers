function suscripcion() {
    var formulario = document.getElementById('formulario');
    console.log(formulario.classList);
    console.log(formulario.className.split(' '));
    if (formulario.className.split(' ').indexOf('escondido') != -1) {
        formulario.classList.remove('escondido');
    } else {
        formulario.classList.add('escondido');
    }
}
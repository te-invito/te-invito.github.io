function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'https://wa.me/';
    //'whatsapp://';
const telefono = '541138624909';
let formu20 =document.querySelector('#formulario');


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        // let asistencia = document.querySelector('.asistencia').value
        let asistencia = $('input[name="asistencia"]:checked').val();
        let mensaje = 'send?phone=' + telefono + '&text=*_Confirmacion de asistencia_*%0A*¿Cual es tu nombre?*%0A' + nombre + '%0A*¿Cuáles es tu apellidos?*%0A' + apellidos + '%0A*¿Asistiras al evento?*%0A' + asistencia +''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
        formu20.reset();
    }, 3000);
});

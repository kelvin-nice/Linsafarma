
/* window.addEventListener('load', function () {
 */

    const sliders = document.getElementById('imagenes')
    sliders.style.width = "100%"
    let imagenes = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg']
    let imaIndex = 0;

    const changeImagenes = function () {
        sliders.src = `img/${imagenes[imaIndex]}`
        if(imaIndex < (imagenes.length - 1)){
            imaIndex++;
        }else{imaIndex = 0}
    }

    function fijoImg() {
        sliders.src = `img/${imagenes[0]}`
        setInterval(changeImagenes, 4000)
    }

    fijoImg()
    /* setInterval(changeImagenes, 4000) */


/* }) */

let prev = document.getElementById('izquierda3');
let next = document.getElementById('derecha3');




next.addEventListener('click', function () {
    sliders.src = `img/${imagenes[imaIndex]}`;
    if (imaIndex < (imagenes.length -1)) {
        imaIndex++;
    }else{imaIndex=0}
})

prev.addEventListener('click', function () {
    sliders.src = `img/${imagenes[imaIndex]}`
    if (imaIndex > 0 ) {
        imaIndex--;
    }else{imaIndex = 2}
})
const $paneles = document.querySelectorAll('.panel');


$paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        quitarClaseActiva()
        panel.classList.add('activo')
    })
})


const quitarClaseActiva = () =>{
    $paneles.forEach(panel => {
        panel.classList.remove('activo');
    })
}
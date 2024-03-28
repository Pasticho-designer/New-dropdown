const dropdown = document.querySelector('.dropdown')

const input = dropdown.querySelector('.seleccionado');
const menu = dropdown.querySelector('#menu');
const flecha = dropdown.querySelector('.flecha');
const opciones = dropdown.querySelectorAll('.opcion')


input.addEventListener('click', ()=>{

    menu.classList.toggle('opciones-aparecer');
    flecha.classList.toggle('rotate');
    input.classList.toggle('seleccionado-presionado');



    opciones.forEach(opcion => {

        opcion.addEventListener('click',()=>{

            input.value = opcion.textContent;
            menu.classList.remove('opciones-aparecer');
            flecha.classList.remove('rotate');
            input.classList.remove('seleccionado-presionado')

            opciones.forEach(opcion => {
                opcion.classList.remove('active')
            })

            opcion.classList.add('active')
        })

        
    })


})


//onclick="mudaTexto(this)"
//Todas as funções são camelCase
// Capitulo 9: do pdf
// Pegar elemento
;(function () {
    const $btn = document.querySelector('#btnMudaLayout') //ES6

    function mudaTexto() {
        if(this.textContent == 'Blocos') { 
            this.textContent = 'Linhas'; 
        } else { 
            this.textContent = 'Blocos'; 
        }
    }

    //$btn.onclick = mudaTexto
   $btn.addEventListener('click', mudaTexto)

    // adicionar classe
    const mural = document.querySelector('.mural')

    function mudaLayout() {
        mural.classList.toggle('mural--linha')
        // if(mural.classList.contains('mural--linha')) {
        //   mural.classList.remove('mural--linha')
        // } else {
        //   mural.classList.add('mural--linha')
        // }  
    }

   $btn.addEventListener('click', mudaLayout)

    // Progressive Enhancement = Carregamento Progressivo
    // -muda layout
    // -busca
    // -ajudas
    // -sync
   $btn.classList.remove('no-js')
     
})

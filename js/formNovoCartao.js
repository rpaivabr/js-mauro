
;(function() { //IIFE 
    const $form = document.querySelector('.formNovoCartao')
    $form.classList.remove('no-js')

    console.log(contador)

    // Add EventListener
    $form.addEventListener('submit', function(event) {
        event.preventDefault()
        const $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = $campoDeConteudo.value.trim()

        if(conteudo === '') {
            const $tpl = document.createElement('tpl')
            $tpl.innerHTML = `
            <div class="formNovoCartao-msg">
                Erro: Mensagem em branco
            </div>
            `    
            $msgErro = $tpl.querySelector('.formNovoCartao-msg')
            
            // //Cria elemento erro (imperativo)
            // const $msgErro = document.createElement('div')
            // $msgErro.classList.add('formNovoCartao-msg')
            // $msgErro.textContent = 'Erro: Mensagem em branco'

            //Inserir Elemento Erro
            const $input = document.querySelector('.formNovoCartao-salvar')
            $input.insertAdjacentElement('beforebegin', $msgErro)

            //Remove elemento erro
            $msgErro.addEventListener('animationend',function() {
                $msgErro.remove()
            })
        } else {
            criaCartao(conteudo)
        }
        $campoDeConteudo.value = ''
    })
})()
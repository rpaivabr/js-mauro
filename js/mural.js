let contador = document.querySelectorAll('.cartao').length

function criaCartao(conteudo, cor) {
    contador++

    const $cartao = $(`
    <article id="cartao_${contador}" tabindex="0" class="cartao">
        <div class="opcoesDoCartao">
        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
        </button>
        <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
        <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
        </label>
        <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
        </label>
        <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
        </label>
        <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
        </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
    </article>
    `)

    
    // $cartao = $tpl.querySelector('.cartao')
    // document.querySelector('.mural').insertAdjacentElement('afterbegin', $cartao)
    
    $cartao.on('focusin', function() {
        //console.log('bagulhos')
        $cartao.addClass('cartao--focado')
    })

    $cartao.on('focusout', function() {
        $cartao.removeClass('cartao--focado')
    })

    $cartao.on('change', '.opcoesDoCartao-radioTipo', function(event) {
        // const $elementoAtual = event.target
        // const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')

        // // Delegate:
        // if(isRadioTipo) {
        //     const novaCor = $elementoAtual.value
        //     $cartao.style.background = novaCor
        // }
        const $elementoAtual = $(event.target)
        const novaCor = $elementoAtual.val()
        $cartao.css('background', novaCor)
    })

    $cartao.on('keydown',function(event) {
        const $elementoAtual = $(event.target)
        const isLabel = $elementoAtual.hasClass('opcoesDoCartao-tipo')

        if(isLabel && (event.key === 'Enter' || event.key === ' ' )){
            $elementoAtual.click()
        }
    })

    // Implementar o Remove com Delegate
    $cartao.on('click', '.opcoesDoCartao-remove',  function (event) {
        const $elementoAtual = $(event.target)

        $cartao.addClass('cartao--somePeixinho')
        $cartao.on('transitionend', function() {
            $cartao.remove()
        })
    })  

    $('.mural').prepend($cartao)
}

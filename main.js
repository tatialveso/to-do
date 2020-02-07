// quando o botão for clicado o card vai para o lado direito como se a tarefa tivesse sido feita
function cardFeito() {
    let $card = $('#card');
    let $direito = $('#lado-direito');
    
    $direito.append($card);

    $('#btn-feito').hide();
    $('#btn-desfeito').show();
};

$('#btn-feito').click(cardFeito);

// quando o botão for clicado o card vai ser excluído
function cardDelete() {
    let $delete = $('#card');

    $delete.remove();
};

$('#btn-delete').click(cardDelete);

// evento submit para enviar os dados
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let script_card = document.getElementById('placeholder-card')
    let conteudo_html = script_card.innerHTML

    let titulo = document.getElementById('input').value;
    let descricao = document.getElementById('textarea').value;

    conteudo_html = conteudo_html.replace("@titulo", titulo);
    conteudo_html = conteudo_html.replace("@descricao", descricao)
    
    $container = $('#lado-esquerdo');
    $card = $(conteudo_html)

    $container.append($card);
});

// quando finalizado o botão muda de nome e quando desfazer clicada mova para o outro lado e mude o botão
function cardDesfeito() {
    let $card = $('#card');
    let $esquerdo = $('#lado-esquerdo');
    
    $esquerdo.append($card);

    $('#btn-desfeito').hide();
    $('#btn-feito').show();
};

$('#btn-desfeito').click(cardDesfeito);
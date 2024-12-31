$(document).ready(function(){
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $(`<li class="nada">${enderecoDaNovaImagem}</li>`);
            $(novoItem).appendTo('ul');
            $('#endereco-imagem-novo').val('');
    });

    $(document).on('click', 'li', function () {
        $(this).toggleClass('riscar');
    });
});
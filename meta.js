const formulario = document.getElementById('meuFormulario');
        const campoA = document.getElementById('campoA');
        const campoB = document.getElementById('campoB');
        const mensagem = document.getElementById('mensagem');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            if (campoB.value > campoA.value) {
                mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
            } else {
                mensagem.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
            }
        });
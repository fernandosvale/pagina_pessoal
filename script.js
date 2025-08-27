// 1. Validação Simples de Formulário
const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemTextarea = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (nomeInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert('Mensagem enviada com sucesso!');
        nomeInput.value = '';
        emailInput.value = '';
        mensagemTextarea.value = '';
    }
});

// 2. Modo Claro/Escuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Escuro';
    }
});

// 3. Contador de Caracteres
const charCounterSpan = document.getElementById('char-counter');
const maxChars = 200;

mensagemTextarea.addEventListener('input', function() {
    const currentLength = mensagemTextarea.value.length;
    charCounterSpan.textContent = `${currentLength}/${maxChars}`;
});
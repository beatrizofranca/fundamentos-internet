document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailValue = loginEmail.value.trim();
            const passwordValue = loginPassword.value.trim();

            let isValid = true;

            // 1. Validação do E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                alert('Erro: Por favor, insira um e-mail em formato válido (ex: exemplo@dominio.com).');
                isValid = false;
            }

            // 2. Validação da Senha
            if (passwordValue.length < 6) {
                alert('Erro: A senha deve conter no mínimo 6 caracteres.');
                isValid = false;
            }

            // 3. Ação: Se tudo for válido, mostra no console
            if (isValid) {
                console.log("Login Válido! Dados enviados:");
                console.log("E-mail:", emailValue);
                console.log("Senha:", passwordValue);
                alert("Login efetuado com sucesso! Verifique o console do navegador (F12) para ver os dados.");
            }
        });
    }
});
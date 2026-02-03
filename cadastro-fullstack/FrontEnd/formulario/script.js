const passwordField = document.getElementById('Senha');
const confirmPasswordField = document.getElementById('ConfirmarSenha');
const changeCheckbox = document.getElementById('MostrarSenhas');
const form = document.querySelector('form');
const erroSenha = document.getElementById('erroSenha');
const telefoneField = document.getElementById('Telefone');
const idadeField = document.getElementById('idade');
const erroIdade = document.getElementById('erroIdade');


// Validar campo de idade para aceitar o cadastro apenas de maiores de 18 anos

idadeField.addEventListener('input', function () {
  // limpa tudo que não for número (evita "e", "+", etc)
  this.value = this.value.replace(/\D/g, '');

  const age = Number(this.value);

  // vazio: limpa aviso
  if (!this.value) {
    erroIdade.textContent = '';
    erroIdade.style.display = 'none';
    return;
  }

  if (age < 18) {
    erroIdade.textContent = 'Cadastro permitido apenas para maiores de 18 anos.';
    erroIdade.style.display = 'block';
  } else if (age > 100) {
    erroIdade.textContent = 'Idade máxima permitida é 100 anos.';
    erroIdade.style.display = 'block';
  } else {
    erroIdade.textContent = '';
    erroIdade.style.display = 'none';
  }
});



// Validar campo de telefone para aceitar apenas números
telefoneField.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
});

// Mostrar/ocultar senhas
changeCheckbox.addEventListener('change', function () {
  const type = this.checked ? 'text' : 'password';
  passwordField.type = type;
  confirmPasswordField.type = type;
});

// Validar no envio
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (passwordField.value !== confirmPasswordField.value) {
    erroSenha.textContent = 'As senhas não coincidem';
    erroSenha.style.display = 'block';
    confirmPasswordField.focus();
    return; // para aqui
  }

  erroSenha.style.display = 'none';

  const nome = document.getElementById('Nome').value;
  const email = document.getElementById('Email').value;
  const telefone = telefoneField.value;
  const idade = idadeField.value;
  const senha = passwordField.value;

  const dadosFormulario = {
    nome: nome,
    email: email,
    telefone: telefone,
    idade: Number(idade),
    senha: senha
  };
  const msg = document.getElementById('msg');
  msg.textContent = dadosFormulario.nome + ', seu cadastro foi realizado com sucesso!';
  msg.style.display = 'block';

  fetch('http://localhost:8080/cadastro', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dadosFormulario)
})

.then(res => res.json())
.then(data => console.log("resposta do backend:", data))
.catch(err => console.log("erro no fetch:", err))

});

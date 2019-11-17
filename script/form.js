var btn = document.querySelector('#btn');

btn.addEventListener('click', function (event) {

	event.preventDefault();

	// RECEBENDO DADOS DO FORM
	var form = document.querySelector('#form-contato');

	var nome = form.nome.value;
	var email = form.email.value;
	var telefone = form.telefone.value;
	var assunto = form.assunto.value;
	var mensagem = form.mensagem.value;

	// VALIDANDO CAMPOS DO FORM

	// VALIDANDO CAMPO NOME
	if (nome === "") {
		form.nome.classList.add('valida');

		var validando = document.querySelector('#nomeLabel');
		validando.classList.add("validaLabel");

		validando.innerHTML = "Preencha o campo nome";

		form.nome.focus();

	}else{
		form.nome.classList.remove('valida');

		var validando = document.querySelector('#nomeLabel');
		validando.classList.remove("validaLabel");
		validando.innerHTML = "Nome (obrigatório)";
	}

	// VALIDANDO CAMPO EMAIL

	if (email === "") {
		form.email.classList.add('valida');

		var validando = document.querySelector('#emailLabel');
		validando.classList.add("validaLabel");

		validando.innerHTML = "Preencha o campo email";

	}else{
		form.email.classList.remove('valida');

		var validando = document.querySelector('#emailLabel');
		validando.classList.remove("validaLabel");
		validando.innerHTML = "E-mail (Obrigatório)";
	}

	// VALIDANDO CAMPO TELEFONE

	if (telefone === "") {
		form.telefone.classList.add('valida');

		var validando = document.querySelector('#telefoneLabel');
		validando.classList.add("validaLabel");

		validando.innerHTML = "Preencha o campo telefone";

	}else{
		form.telefone.classList.remove('valida');

		var validando = document.querySelector('#telefoneLabel');
		validando.classList.remove("validaLabel");
		validando.innerHTML = "Telefone";
	}

	// VALIDANDO CAMPO ASSUNTO

	if (assunto === "") {
		form.assunto.classList.add('valida');

		var validando = document.querySelector('#assuntoLabel');
		validando.classList.add("validaLabel");

		validando.innerHTML = "Preencha o campo assunto";

	}else{
		form.assunto.classList.remove('valida');

		var validando = document.querySelector('#assuntoLabel');
		validando.classList.remove("validaLabel");
		validando.innerHTML = "Assunto";
	}

	// VALIDANDO CAMPO MENSAGEM

	if (mensagem === "") {
		form.mensagem.classList.add('valida');

		var validando = document.querySelector('#mensagemLabel');
		validando.classList.add("validaLabel");

		validando.innerHTML = "Preencha o campo mensagem";

	}else{
		form.mensagem.classList.remove('valida');

		var validando = document.querySelector('#mensagemLabel');
		validando.classList.remove("validaLabel");
		validando.innerHTML = "Mensagem";
	}



});
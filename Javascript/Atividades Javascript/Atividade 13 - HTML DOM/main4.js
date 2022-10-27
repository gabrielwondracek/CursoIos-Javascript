// Método querySelector 
const btn = document.querySelector('.btn');
btn.style.background = 'red';

//Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);
    //Função onsubmit
    function onSubmit(e) {
        e.preventDefault();
        if (nameInput.value === '' || emailInput.value === '') {
            //alert('Preencha os dados')
            msg.classList.add('error');
            msg.innerHTML = 'Preencha os dados';
            setTimeout(() => msg.remove(), 3000);
        } else {
            const li = document.createElement('li');
            li.appendChild(
                document.createTextNode(
                    `${nameInput.value} : ${emailInput.value} : ${horario.value}`
                )
            );
            userList.appendChild(li);
            //Limpa o forms
            nameInput.value = '';
            emailInput.value = '';
            horario.getElementsByTagName('option')[0].selected = 'selected';
            nameInput.focus(); //Coloca foco no elemento
        }
    }

    // Validando email
    emailInput.addEventListener('change', (e) => {
        let padrao = new RegExp(/.*@.*\..*/i);
        if (!padrao.test(emailInput.value)) {
            msg_email.classList.add('error');
            msg_email.innerHTML = 'Insira um e-mail válido';
            setTimeout(() => msg.remove(), 3000);
        }
    });
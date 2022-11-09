const manha = document.querySelector("#manha");
const horarioManha = document.querySelector("#horarioManha");
const horarioManha2 = document.querySelector("#horarioManha2");
const tarde = document.querySelector("#tarde");
const horarioTarde = document.querySelector("#horarioTarde");
const horarioTarde2 = document.querySelector("#horarioTarde2");
const noite = document.querySelector("#noite");
const horarioNoite = document.querySelector("#horarioNoite");
const horarioNoite2 = document.querySelector("#horarioNoite2");
const msg = document.querySelector("#msg");

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click', (e) => {

    e.preventDefault();

    //Pegando o valor selecionado no formulário
    const manhaValue = manha.value;
    const tardeValue = tarde.value;
    const noiteValue = noite.value;

    // Criando objeto com os horarios iniciais
    const horariosIniciais = {
        id: 1,
        horarioMa: horarioManha.value,
        horarioTa: horarioTarde.value,
        horarioNo: horarioNoite.value,
    }

    // Criando objeto com os horarios finais
    const horariosFinais = {
        id: 2,
        horarioMa2: horarioManha2.value,
        horarioTa2: horarioTarde2.value,
        horarioNo2: horarioNoite2.value,
    }

    // Criando objeto com a programação
    const programacao = {
        id: 3,
        manha: manhaValue,
        tarde: tardeValue,
        noite: noiteValue,
    }

    //Colocando o valor selecionado no formulário em um localStorage
    localStorage.setItem("manha", programacao.manha);
    localStorage.setItem("tarde", programacao.tarde);
    localStorage.setItem("noite", programacao.noite);


    // Colocando os dados da programação 
    fetch("http://localhost:3000/programacao/3", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(programacao),
    }).then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err));

    // Colocando os dados dos horários iniciais no db.json
    fetch("http://localhost:3000/horariosIniciais/1", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(horariosIniciais),
    }).then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err));

    // Colocando os dados dos horários finais no db.json
    fetch("http://localhost:3000/horariosFinais/2", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(horariosFinais),
    }).then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err));

    //Pegando o valor do horario inicial
    const horarioMa = horarioManha.value;
    const horarioTa = horarioTarde.value;
    const horarioNo = horarioNoite.value;

    //Pegando o valor do horario final
    const horarioMa2 = horarioManha2.value;
    const horarioTa2 = horarioTarde2.value;
    const horarioNo2 = horarioNoite2.value;

    //Conferindo se o primeiro horário é maior que o segundo
    if(horarioMa >= horarioMa2 || horarioTa >= horarioTa2 || horarioNo >= horarioNo2){
        msg.style.display = "block";
        msg.style.backgroundColor = "rgba(255, 0, 0, 0.144)";
        msg.style.border = 'solid 2px red';
        return msg.innerHTML = ('O horário inicial não pode ser maior que o horário final, programação não enviada!');
    }

    //Colocando o valor do horario inicial no localStorage
    localStorage.setItem("horarioManha", horarioMa);
    localStorage.setItem("horarioTarde", horarioTa);
    localStorage.setItem("horarioNoite", horarioNo);

    //Colocando o valor do horario final no localStorage
    localStorage.setItem("horarioManha2", horarioMa2);
    localStorage.setItem("horarioTarde2", horarioTa2);
    localStorage.setItem("horarioNoite2", horarioNo2);

    //Mensagem de alerta para o usuário saber que a programaçaõ foi enviada
        msg.style.display = "block";
        msg.style.backgroundColor = "rgba(0, 128, 0, 0.144)";
        msg.style.border = 'solid 2px green';
        return msg.innerHTML = ('Programação enviada com sucesso!');

});

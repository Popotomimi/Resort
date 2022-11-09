const msgManha = document.querySelector("#msgManha");
const msgTarde = document.querySelector("#msgTarde");
const msgNoite = document.querySelector("#msgNoite");

//Pegando o h2 do dia
const dia = document.querySelector("#dia");
let data = new Date();

dia.innerHTML = (data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());

// Colocando os valores das divs em uma variável para a programação da manha
const inicioManha = document.querySelector("#inicioManha");
const finalManha = document.querySelector("#fimManha");
const programacaoManha = document.querySelector("#manhaProgramacao");

// Colocando os valores das divs em uma variável para a programação da tarde
const inicioTarde = document.querySelector("#inicioTarde");
const finalTarde = document.querySelector("#fimTarde");
const programacaoTarde = document.querySelector("#tardeProgramacao");

// Colocando os valores das divs em uma variável para a programacao da tarde
const inicioNoite = document.querySelector("#inicioNoite");
const finalNoite = document.querySelector("#fimNoite");
const programacaoNoite = document.querySelector("#noiteProgramacao");

//chamando a função assim que carregar o index.html
programacao();

function programacao(){

    // Pegando os dados da programação 
    fetch("http://localhost:3000/programacao", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        // Escrevendo os valores coletados do db.json nas divs do index.html
        let programacaoMa = (data[0].manha);
        programacaoManha.innerHTML = programacaoMa;
        let programacaoTa = (data[0].tarde);
        programacaoTarde.innerHTML = programacaoTa;
        let programacaoNo = (data[0].noite);
        programacaoNoite.innerHTML = programacaoNo;
    })
    .catch(err => console.log(err));

    // Pegando os dados dos horários iniciais no db.json
    fetch("http://localhost:3000/horariosIniciais", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        // Escrevendo os valores coletados do db.json nas divs do index.html
        let horarioManha = (data[0].horarioMa);
        inicioManha.innerHTML = horarioManha;
        let horarioTarde = (data[0].horarioTa);
        inicioTarde.innerHTML = horarioTarde;
        let horarioNo = (data[0].horarioNo);
        inicioNoite.innerHTML = horarioNo;

    })
    .catch(err => console.log(err));

    // Pegando os dados dos horários finais no db.json
    fetch("http://localhost:3000/horariosFinais", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }).then((resp) => resp.json())
    .then((data) => {
        // Escrevendo os valores coletados do db.json nas divs do index.html
        let horarioManha2 = (data[0].horarioMa2);
        finalManha.innerHTML = horarioManha2;
        let horarioTarde2 = (data[0].horarioTa2);
        finalTarde.innerHTML = horarioTarde2;
        let horarioNoite2 = (data[0].horarioNo2);
        finalNoite.innerHTML = horarioNoite2;
    })
    .catch(err => console.log(err));
}


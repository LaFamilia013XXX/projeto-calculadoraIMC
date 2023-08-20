const mainprogram=document.querySelector('#peso-altura');


mainprogram.addEventListener('submit', function(e){
    e.preventDefault(); // Evitando o evento submit(não enviando os valores);

    // armazenando os valores do input em variáveis;
    const inputPeso=document.querySelector('#peso'); 
    const inputAltura=document.querySelector('#altura');

    // Transformando eles em Números, para realizar a operação;
    const peso= Number(inputPeso.value);
    const altura= Number(inputAltura.value);

    // Estrutura de condição, onde verifica de acordo coma flag se os valores são números ou NaN;
    if(!peso && !altura){
        setResultado(`Ambos os valores são invalidos`, true);
        return
    }

    if(!peso){
        setResultado(`O peso é um valor invalido`, true);
        return
    }
    if(!altura){
        setResultado(`A altura é um valor inválido`, true);
        return
    }

    const calculadoIMC = calculandoIMC(peso, altura);  // enviando os dados para função;
    const armazenandoMensagem = retornandoNiveil(calculadoIMC);

    setResultado(`Seu IMC é ${calculadoIMC} (${armazenandoMensagem})`, false); // setando o resultado da operação na tela do usuário;
})

function retornandoNiveil(armazenandoCalculo){ // função que verifica de acordo com o resultado o grau de obsidade do usuário;
    const niveis = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau I', 'Obsidade grau II', 'Obsidade grau III'];
    
    if(armazenandoCalculo < 18.5){
        return niveis[0];
    }
    if(armazenandoCalculo <= 24.9){
        return niveis[1];
    }
    if(armazenandoCalculo <= 29.9){
        return niveis[2];
    }
    if(armazenandoCalculo <= 34.9){
        return niveis[3];
    }
    if(armazenandoCalculo <= 39.9){
        return niveis[4];
    }
    if(armazenandoCalculo > 40){
        return niveis[5];
    }
}

// função que determina o IMC;
function calculandoIMC(valor1, valor2){
    const resultado = valor1/(valor2**2);
    return resultado.toFixed(2);
}

// Criando um elemento P no código html;
function criandoP(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

// função para setar o valor na tela, ela recebe uma flag, onde a partir do valor true(NaN) ou false(números verdadeiros), ele retorna uma class diferente no css;
function setResultado(msg, flag01){
    const resultado=document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criandoP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    flag01 == true ? p.classList.add('true-value') : p.classList.add('false-value'); // emprego do operador ternário, para verificar se os valores são Nan ou números verdadeiros;
}

const visor=document.getElementById('visor');
let visorResultado=document.querySelector('#visorResultado');
const botoes=document.querySelectorAll('.btn');
const botaoCorrige=document.querySelector('.btnCorrige');
const botaoIgual=document.querySelector('.btnIgual');

const calculadora=document.getElementById('calculadora')

const tema=document.getElementById('modo');


tema.addEventListener('click', function(){
  const escuro=document.body.classList.toggle('modoEscuro');
  const claro=document.body.classList.toggle('modoClaro');

  if(escuro){
    tema.style.background='white';
    tema.style.color='#212529';
    calculadora.style.borderColor='white';
    tema.innerText='Tema Claro'
    

  }else{
    calculadora.style.borderColor='#212529';
    tema.innerText='Tema Escuro';
    tema.style.background='#212529';
    tema.style.color='white';

  }
})


// criação das teclas que serão permitidas
const teclas=["(", ")", "/", "7", "8", "9", "*", "4", "5", "6","-", "1", "2", "3", "+", "0", "."];

// evento quando a tecla é pressionada para verificar se a tecla apertada é permitida
visor.addEventListener('keydown',function(ev){
  ev.preventDefault() // previne o comportamento padrão do evento, controla manualmente
  
  if(teclas.includes(ev.key)){//ev.key é a tecla asssociada ao evento,tecla que o usuario acionou;
    visor.value+=ev.key;
    return
  }

  if(ev.key==='Backspace'){
    visor.value = visor.value.slice(0, -1) // slice retira uma parte do valor do visor, retira o ultimo elemento digitado com esses parametros
  }

  if(ev.key==='Enter'){
    calculaResultado();
  }
   
})



//percorrer todos os botoes para pegar o valor de cada botao saparado
botoes.forEach(function(botao){//vai ser executado para cada botao
  botao.addEventListener('click', function(){
    const value = botao.dataset.value;  //dataset vai acessar cada atributo do tipo data
    visor.value+=value;
  })
})


// botão corrige

botaoCorrige.addEventListener('click', function(){
  visor.value = '';
  visorResultado.value=''
  visor.focus();
})



// botão igual para calcular o resultado
botaoIgual.addEventListener('click',calculaResultado );


function calculaResultado(){
  visorResultado.value='ERROR'
  visorResultado.classList.add('erro');

  let resultado= eval(visor.value); //eval vai fazer todo o porcesso de calculo, avalia tudo que esta dentro do elemento
  visorResultado.value=resultado;
  visorResultado.classList.remove('erro')
}


//botão de copiar
const botaoCopia=document.getElementById('btnCopy');

botaoCopia.addEventListener('click',function(){
  if(botaoCopia.innerText=='Copy'){
    botaoCopia.innerText='Copiado';
    botaoCopia.classList.add('copiando');
    navigator.clipboard.writeText(visorResultado.value);
  }else{
    botaoCopia.innerText='Copy';
    botaoCopia.classList.remove('copiando');
  }
})


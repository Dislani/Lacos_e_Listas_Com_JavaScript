let xCarros = [600, 600, 600,600,600, 600];

let yCarros = [45, 150, 100, 315, 214, 270];

let velocidadeCarros= [5.8, 6.7, 4.9, 6.5, 5.4, 6.9];

let comprimentoCarro = 50;

let alturaCarro = 40;


function mostraCarro(){  
  
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
  

function movimentaCarro(){
  
  for (let i = 0; i < imagemCarros.length; i++ ){
    xCarros[i] = xCarros[i] - velocidadeCarros[i];
  }
}

function voltarPosicaoInicialDoCarro(){

  for ( let i = 0; i < imagemCarros.length; i++){
   
    if (CarroPassouTodaTela(xCarros[i])){
    xCarros[i] = 600;
      
    }
  }
}

function CarroPassouTodaTela(xCarros){
  return xCarros < -70
}
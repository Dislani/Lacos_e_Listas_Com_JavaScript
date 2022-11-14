let yVaquinha = 366;
let xVaquinha = 85;
let colisao = false;
let meusPontos = 0;

function mostraVaquinha(){
  image(imagemDaVaquinha, xVaquinha, yVaquinha, 30,30);
}

function movimentaVaquinha(){
  if (keyIsDown(UP_ARROW)){
    yVaquinha= yVaquinha - 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
          yVaquinha= yVaquinha + 3;
    }
  }
}

function podeSeMover(){
  return yVaquinha < 366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i=0; i < imagemCarros.length; i= i+1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaquinha, yVaquinha, 15)
    if (colisao == true){
      voltaVaquinhaPosiçãoInicial();
       somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1; //ou meusPontos = meusPontos - 1
      }
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function voltaVaquinhaPosiçãoInicial(){
    yVaquinha = 366;
  }

function incluirPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255,265,0)
  text(meusPontos, width/5,27)
}

function marcaPonto(){
  if (yVaquinha < 6){
    meusPontos = meusPontos + 1;
    somDoPonto.play();
    voltaVaquinhaPosiçãoInicial();
  }
}

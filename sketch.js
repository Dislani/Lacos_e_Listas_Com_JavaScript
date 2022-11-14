function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
 
}

function draw() {
  background(imagemDaEstrada);
  mostraVaquinha();
  mostraCarro();
  movimentaCarro();
  movimentaVaquinha();
  voltarPosicaoInicialDoCarro();
  verificaColisao();
  incluirPontos();
  marcaPonto();
}
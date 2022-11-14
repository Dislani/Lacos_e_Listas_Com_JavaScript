let imagemDaEstrada;
let imagemDaVaquinha;
let imagemCarros;

let somDaTrilha;
let somColisao;
let somDoPonto;

//FUNÇÃO PARA CARREGAMENTO DAS IMAGENS
function preload(){

imagemDaEstrada= loadImage ("imagens/estrada.png");
imagemDaVaquinha= loadImage("imagens/vaquinha.png");
imagemCarroPreto= loadImage("imagens/carro-preto.png");
imagemCarroVerde= loadImage("imagens/carro-verde.png");
imagemCarroAmarelo = loadImage ("imagens/carro-amarelo.png")

//LISTA PARA ARMAZENAR AS VARIAVEIS COM AS IMAGENS DOS CARROS
imagemCarros = [imagemCarroPreto, imagemCarroVerde, imagemCarroAmarelo, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde];
  
//ADICIONANDO SONS AO JOGO
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");

}
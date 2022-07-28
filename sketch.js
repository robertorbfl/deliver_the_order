function setup(){
  createCanvas(1080, 600); 
  trilha.loop();
}
function draw(){
 background(imagemFundo);
 revelaBoneco();
 criaEncomenda();
 revelaPlacar();
 movimentaEncomenda();
 revelaAves();
 voaAveVerde();
 voaAveVerde1();
 voaAveRosa();
 voaAveRosa1();
 voaAve();
 voaAve1();
 voaAveAzul();
 voltaPosicao();
 verificaPorrada();
 mostraPonto();
 marcaPontos();
 mostraAvesMachucadas();
}


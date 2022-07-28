// Variáveis Encomenda
let xEncomenda = 35
let yEncomenda = 370
let porrada = false
let meusPontos = 0;
let avesMachucadas = 0;
let pontuou = false
let larguraEncomenda = 40
let alturaEncomenda = 40
let xPlacar = 250
let yPlacar = 420

 margemX = [160, 161, 163, 164, 165, 166]
 margemY = [863, 862, 861, 860, 859]

function revelaBoneco(){
  image(imagemBoneco, 0, 370, 170, 170)
  }
function criaEncomenda(){
  image(imagemEncomenda, xEncomenda, yEncomenda, 40, 40);
}
function revelaPlacar(){
  image(imagemPlacar, xPlacar, yPlacar, 200, 100);
}


function movimentaEncomenda(){
  if (keyIsDown(UP_ARROW)){
    yEncomenda -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yEncomenda += 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    xEncomenda -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xEncomenda += 5;
  }
}


function verificaPorrada(){
  for (let i = 0; i < imagensAves.length; i = i + 1){
    porrada = collideRectCircle(xAves[i], yAves[i], comprimentoAve, alturaAve, xEncomenda, yEncomenda, 15);
    if (porrada)
    bateu();
      if (porrada){
       avesMachucadas = avesMachucadas + 1;
         if(porrada){
           machucou.play()
         } 
    }  
  }
}


function bateu(){
  yEncomenda = 370
  xEncomenda = 35
}

function mostraPonto(){
  textSize(25)
  fill(color(255, 240, 60))
  text(meusPontos, 290, 500)
}

function mostraAvesMachucadas(){
   textSize(25)
  fill(color(255, 240, 60))
  text(avesMachucadas, 390, 500)
}



function marcaPontos(){
  pontuou = collideRectRect(xEncomenda, yEncomenda, larguraEncomenda, alturaEncomenda, 860, 163, 10, 10);
  if (pontuou){
    meusPontos = meusPontos + 1
    entrega.play();
    bateu();
}
}
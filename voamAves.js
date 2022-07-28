let yAves = [20, 70, 120, 170, 220, 270, 290]
let xAves = [1008, 10, 1000, -350, 1000, -15, 1500]
let VeloAves = [3, 5, 2, 7, 6, 1, 4]
let tremorAve = [45, 60, 130, 160, 210, 260, 280]
let tremorAve1 = [40, 95, 150, 200, 250, 300, 300]
let velocidadeY = [1, 1, 1, 1, 1, 1, 1]
let comprimentoAve = 50
let alturaAve = 50

function revelaAves(){
  for (let i = 0; i < imagensAves.length; i = i + 1)
  image(imagensAves[i], xAves[i], yAves[i], comprimentoAve, alturaAve);
}
function voaAveVerde(){
  xAves[0] -= VeloAves[0];
  yAves[0] = yAves[0] + velocidadeY[0]
    if (yAves[0] <= tremorAve[0]){
      velocidadeY[0] += 0.5  
    } else {
      (yAves[0] >= tremorAve1[0])
      velocidadeY[0] -= 0.5
      loop();
    }
  }
function voaAveVerde1(){
  xAves[1] += VeloAves[1];
  yAves[1] = yAves[1] + velocidadeY[1]
    if (yAves[1] <= tremorAve[1]){
      velocidadeY[1] += 0.5  
    } else {
      (yAves[1] >= tremorAve1[1])
      velocidadeY[1] -= 0.5
      loop();
    }
  }

function voaAveRosa(){
  xAves[2] -= VeloAves[2];
  yAves[2] = yAves[2] + velocidadeY[2]
    if (yAves[2] <= tremorAve[2]){
      velocidadeY[2] += 0.5  
    } else {
      (yAves[2] >= tremorAve1[2])
      velocidadeY[2] -= 0.5
      loop();
    }
  }

function voaAveRosa1(){
  xAves[3] += VeloAves[3];
  yAves[3] = yAves[3] + velocidadeY[3]
    if (yAves[3] <= tremorAve[2]){
      velocidadeY[3] += 0.5  
    } else {
      (yAves[3] >= tremorAve1[3])
      velocidadeY[3] -= 0.5
      loop();
    }
  }

function voaAve(){
  xAves[4] -= VeloAves[4];
  yAves[4] = yAves[4] + velocidadeY[4]
    if (yAves[4] <= tremorAve[4]){
      velocidadeY[4] += 0.5  
    } else {
      (yAves[4] >= tremorAve1[4])
      velocidadeY[4] -= 0.5
      loop();
    }
  }

function voaAve1(){
 xAves[5] += VeloAves[5];
  yAves[5] = yAves[5] + velocidadeY[5]
    if (yAves[5] <= tremorAve[5]){
      velocidadeY[5] += 0.5  
    } else {
      (yAves[5] >= tremorAve1[5])
      velocidadeY[5] -= 0.5
      loop();
    }
  }

function voaAveAzul(){
 xAves[6] -= VeloAves[6];
  yAves[6] = yAves[6] + velocidadeY[6]
    if (yAves[6] <= tremorAve[6]){
      velocidadeY[6] += 0.5  
    } else {
      (yAves[6] >= tremorAve1[6])
      velocidadeY[6] -= 0.5
      loop();
    }
  }


function voltaPosicao(){
  if (xAves[0] < -50){
    xAves[0] = 1100
  }
  if (xAves[1] > 1100){
    xAves[1] = -100
  }
  if (xAves[2] < -50){
    xAves[2] = 1060
  }
  if (xAves[3] > 1100){
    xAves[3] = -100
  }
  if (xAves[4] < -50){
    xAves[4] = 1100
  }
  if (xAves[5] > 1100){
    xAves[5] = -100
  }
  if (xAves[6] < -50){
    xAves[6] = 1100
  }
}



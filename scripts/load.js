function preload(){
  imagemCenario = loadImage('imagens/cenario/cDesertoB.png'); 
  imagemCenario2 = loadImage('imagens/cenario/cDesertoC.png'); 
  imagemTelaInicial = loadImage('imagens/cenario/cDeserto2.png');
  
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over-clip-art.png');
 
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  imagemPersonagem = loadImage('imagens/personagem/pOvoLoko.png'); 
  imagemPersonagemInvencivel = loadImage('imagens/personagem/pOvoLokoPlus.png'); 
  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png'); 
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png'); 
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png'); 
  
  fita = loadJSON('fita/fita.json');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somPerdeVida = loadSound('sons/pato.mp3');
}



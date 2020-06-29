class BotaoGerenciador{
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena())
    this.botao.addClass('botao-tela-inicial');
  }
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
    
        //console.log(this.texto);
    if(this.texto === 'Re-Iniciar'){
        image(imagemGameOver, width / 2 - imagemGameOver.width / 2, height / 2 - imagemGameOver.height / 2);
        pontuacao.pontos = 0;
        jogo.indice = 0;
        vida.vidas = vida.inicial;
    }
    
    
  }
  
  _alteraCena(){
    this.botao.remove();
    somDoJogo.loop();
    cenaAtual = 'jogo'
  }
}
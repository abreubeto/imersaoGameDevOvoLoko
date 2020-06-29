class TelaInicial {
  constructor(){

  }
  
  draw(){
    this._imagemDefundo();
    this._texto();
    this._botao();
  }
  
  _imagemDefundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width / 2, height / 5 );
    textSize(100);
    text('OvoLoko no Deserto', width / 2, height / 5 * 2 );
    textFont();
    textSize(20);
    text('Este jogo NAO funciona em CELULAR nem TABLET, apenas em COMPUTADORES', width / 2, height / 6 * 4 );
    text('Pule os inimigos utilizando a SETA PARA CIMA no teclado.', width / 2, height / 7 * 5 );
    
    
    textSize(30);
    text('by Beto Abreu', width /2, height / 12 * 5 );
  }
  
  _botao(){
    botaoGerenciador.y = height / 8 * 6;
    botaoGerenciador.draw();
  }
  
}
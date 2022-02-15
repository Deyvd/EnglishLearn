import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3
 

  constructor( ) {
    this.atualizaRodada() 

    this.rodadaFrase
    
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    
  }


  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
  
  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {


    this.rodada++

    this.progresso += 25  

    if(this.progresso === 100){
      this.encerrarJogo.emit('vitoria')
    }

    this.atualizaRodada() 

    this.resposta = ''
    } else {
      this.tentativas--
      this.tentativas
      if (this.tentativas === -1){
        this.atualizaRodada()
        this.encerrarJogo.emit('derrota')

      }
    }

  }

  public atualizaRodada() :void {
    this.rodadaFrase = this.frases[this.rodada]
  }
}

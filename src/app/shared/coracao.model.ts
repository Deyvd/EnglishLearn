import { ReturnStatement } from "@angular/compiler";

export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}
    
    public existeCoracao(): string {
        if(this.cheio) {
            return this.urlCoracaoCheio
        } 
            return this.urlCoracaoVazio
        
    }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {

  formularioCadastro : FormGroup;
    
  constructor() { 
    
  this.formularioCadastro = new FormGroup({
    'nome': new FormControl(null, Validators.required), 
    'telefone': new FormControl(null, Validators.required ),
    'apelido': new FormControl(null, Validators.required)});  
  }
 
  ngOnInit() { }
    
  onSubmit(){
    let dados = `
    nome: ${this.formularioCadastro.value.nome} 
    telefone: ${this.formularioCadastro.value.telefone}
    apelido: ${this.formularioCadastro.value.apelido}`;
     
    console.log(dados);            
  }   

}


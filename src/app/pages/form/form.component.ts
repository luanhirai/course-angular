import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  formulario=new FormGroup({
    nome:new FormControl(''),
    email:new FormControl(''),
  })

  salvar(){
    console.log(this.formulario.controls.nome.value);
  }
}

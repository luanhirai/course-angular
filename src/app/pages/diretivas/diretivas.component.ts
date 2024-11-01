import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReduzNomePipe } from '../../reduz-nome.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [NgIf, ReduzNomePipe, TitleCasePipe, NgClass, RouterModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.scss'
})
export class DiretivasComponent {
  lista=[
    {nome:"luan hirai",idade:20},
    {nome:"lucas antonio",idade:20},
    {nome:"maria clara",idade:20},
    {nome:"luana hirai",idade:24},
  ]
  loading= false;

  buscarMais(){
    setTimeout(()=> {
    this.lista=[...this.lista, {nome:'ana', idade:18}, {nome:'cabrito', idade:1993}, {nome:'pedro', idade:1}];
    this.loading=false;
  },5000);
  }
  
}

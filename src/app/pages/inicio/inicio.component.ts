import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReduzNomePipe } from '../../reduz-nome.pipe';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, TitleCasePipe, CurrencyPipe, DatePipe, ReduzNomePipe],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  nomeFantasia='operative tecnologia';
  faturamento=1000000;
  dataCompra='2024-10-24';
  nome="Luan Avanzini Rampazi Hirai" 
}

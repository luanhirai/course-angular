import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduzNome',
  standalone: true
})
export class ReduzNomePipe implements PipeTransform {

  transform(text:string): string {
    if(!text){
      return '';
    }
    const nomes=text.split(' ');
    const firstName= nomes[0];
    const lastName=nomes[nomes.length-1][0];
    return `${firstName} ${lastName}.`;
  }

}

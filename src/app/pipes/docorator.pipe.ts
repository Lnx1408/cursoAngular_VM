import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'docorator'
})
export class DocoratorPipe implements PipeTransform {

  transform(value: string, decorador:string): string {
    return decorador + value + decorador;
  }

}

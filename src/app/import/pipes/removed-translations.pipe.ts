import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removedTranslations'
})
export class RemovedTranslationsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

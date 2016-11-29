import { Pipe, PipeTransform } from '@angular/core';
import {Translation} from '../../model/translation';

@Pipe({
  name: 'filterTranslation'
})
export class FilterTranslationPipe implements PipeTransform {

  transform(translations: Translation[], searchText: string): Translation[] {
    let filteredTranslations : Translation[] = [];
    for(let translation in translations){
      if(translations[translation].$key.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || translations[translation].en_US.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      filteredTranslations.push(translations[translation]);
    }
    return filteredTranslations;
  }

}

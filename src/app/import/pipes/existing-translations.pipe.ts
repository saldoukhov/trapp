import { Pipe, PipeTransform } from '@angular/core';
import {TranslationsService} from "../../services/translations.service";
import {Translation} from "../../model/translation";

@Pipe({
  name: 'existingTranslations'
})
export class ExistingTranslationsPipe implements PipeTransform {

  private currentTranslations: Translation[];

  constructor(public translationsService : TranslationsService){

  }

  transform(translations: Translation[], args?: any): Translation[] {
    let results : Translation[] = [];

    this.translationsService.translations.subscribe(translations => this.currentTranslations = translations);

    for(let translation of translations){
      if(this.currentTranslations.filter(function(t){return t.$key == translation.$key}).length > 0) {
        results.push(translation);
      }
    }
    return results;
  }

}

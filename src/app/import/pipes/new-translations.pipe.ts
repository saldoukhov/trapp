import { Pipe, PipeTransform } from '@angular/core';
import {Translation} from "../../model/translation";

@Pipe({
  name: 'newTranslations'
})
export class NewTranslationsPipe implements PipeTransform {

  transform(translations: Translation[], args?: any): Translation[] {
    return translations;
  }

}

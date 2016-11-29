import {Component} from '@angular/core';
import "rxjs/add/operator/take";
import {TranslationsService} from "./services/translations.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslationsService]
})
export class AppComponent {

  constructor() {

  }
}

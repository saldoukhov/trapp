import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Translation} from './model/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: FirebaseListObservable<Translation[]>;

  constructor(public af: AngularFire) {
    this.items = af.database
      .list('/translations');
  }

}

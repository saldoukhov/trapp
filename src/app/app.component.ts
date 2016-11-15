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
  private noPermissions: boolean = false;

  constructor(public af: AngularFire) {

    af.auth.subscribe(x => {
      if (!x) {
        this.items = null;
        this.noPermissions = false;
      }
    });

    this.items = af.database
      .list('/translations');

    this.items.subscribe(x => {
      },
      e => {
        if (e.toString().indexOf('permission denied')) {
          this.noPermissions = !!this.items;
        }
      });
  }

}

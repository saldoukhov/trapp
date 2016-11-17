import {Component, Output} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Translation} from './model/translation';
import {Observable} from 'rxjs';

import "rxjs/add/operator/take";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<Translation[]>;
  private noPermissions: boolean = false;

  constructor(public af: AngularFire) {

    af.auth.subscribe(x => {
      if (!x) {
        this.items = null;
        this.noPermissions = false;
      }
    });

    this.items = af.database
      .list('/translations')
      .catch(e => {
        if (e.toString().indexOf('permission denied')) {
          this.noPermissions = !!this.items;
        }
        return this.items.take(0);
      });
  }

  public fileIsOver: boolean = false;

  public fileOver(fileIsOver: boolean): void {
    this.fileIsOver = fileIsOver;
  }

  public onFileDrop(file: string): void {
    console.log(file);
  }
}

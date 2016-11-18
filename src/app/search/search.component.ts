import { Component, OnInit } from '@angular/core';
import {Translation} from '../model/translation';
import {Observable} from 'rxjs';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

  ngOnInit() {
  }

}

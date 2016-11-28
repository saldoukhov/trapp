import {Component, OnInit, Injectable} from '@angular/core';
import {Translation} from '../model/translation';
import {Observable} from 'rxjs';
import {AngularFire} from 'angularfire2';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  items: Translation[];
  private noPermissions: boolean = false;
  private searchText: string = '';


  constructor(public af: AngularFire) {
    // Subscribe to auth changes
    af.auth.subscribe(authorized => {
      if (!authorized) {
        this.items = null;
        this.noPermissions = false;
      }
    });

    // Subscribe to the translations database
    af.database
      .list('/translations')
      .catch(e => {
        if (e.toString().indexOf('permission denied')) {
          this.noPermissions = !!this.items;
        }
        return this.items.take(0);
      }).subscribe(translations => {
        this.items = translations;
      });
  }

  searchTextInputChange(){
    this.items = this.items.filter(translation => translation.$key.indexOf(this.searchText) > -1);
  }

  ngOnInit() {
  }

}

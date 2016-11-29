import {Component, OnInit, Injectable} from '@angular/core';
import {Translation} from '../model/translation';
import {TranslationsService} from '../services/translations.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  public items: Translation[];
  private searchText: string = '';

  constructor(public translationsService: TranslationsService) {
    this.searchText = '';
    this.translationsService.translations.subscribe(trans => this.items = trans);
  }

  ngOnInit() {
    console.log("Object: ", this.items);
  }

}

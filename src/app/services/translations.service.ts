import {Component, OnInit, Injectable} from '@angular/core';
import {Translation} from '../model/translation';
import {Observable} from 'rxjs';
import {AngularFire} from 'angularfire2';



@Injectable()
export class TranslationsService {

  public translations: Observable<Translation[]>;
  private noPermissions: boolean = false;

  constructor(public af: AngularFire) {
    // Subscribe to auth changes
    af.auth.subscribe(authorized => {
      if (!authorized) {
        this.translations = null;
        this.noPermissions = false;
      }
    });

    // Subscribe to the translations database
    this.translations = af.database
      .list('/translations')
      .catch(e => {
        if (e.toString().indexOf('permission denied')) {
          this.noPermissions = !!this.translations;
        }
        return this.translations;
      });

  }

  public getTranslations(): any{
    return this.translations;
  }

  public create(key : any, value: any){
    this.af.database.list('/translations').push({name: key, en_US: value});
  }
}

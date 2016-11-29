import {Component, OnInit} from '@angular/core';
import {Translation} from '../model/translation';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  private items: Translation[];

  private fileIsOver: boolean = false;

  constructor(public af: AngularFire) {
  }

  ngOnInit() {
  }


  private fileOver(fileIsOver: boolean): void {
    this.fileIsOver = fileIsOver;
  }

  private onFileDrop(file: string): void {
    let lines = file.split('\n');
    let trans = lines
      .map(x => {
          let kv = x.split('=');
          if (kv.length < 2)
            return null;
          return <Translation> {
            $key: kv[0],
            en_US: kv[1]
          }
        }
      )
      .filter(x => x);
    this.items = trans;
    console.log(trans);
  }

  private importTranslations() {
    // af.database.object('/translations')
    this.items = null;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  private fileIsOver: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  public fileOver(fileIsOver: boolean): void {
    this.fileIsOver = fileIsOver;
  }

  public onFileDrop(file: string): void {
    console.log(file);
  }
}

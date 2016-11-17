import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Output,
} from '@angular/core';

@Directive({selector: '[fileDrop]'})
export class FileDropDirective {
  @Output() public fileOver: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onFileDrop: EventEmitter<string> = new EventEmitter<string>();

  private element: ElementRef;

  public constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('dragover', [
    '$event',
  ])
  public onDragOver(event: any): void {
    const transfer = FileDropDirective.getDataTransfer(event);

    if (!FileDropDirective.haveFiles(transfer.types)) {
      return;
    }

    transfer.dropEffect = 'copy';
    FileDropDirective.preventAndStop(event);
    this.fileOver.emit(true);
  }

  @HostListener('dragleave', [
    '$event',
  ])
  public onDragLeave(event: any): void {
    if (event.currentTarget === (this as any).element[0]) {
      return;
    }

    FileDropDirective.preventAndStop(event);
    this.fileOver.emit(false);
  }

  @HostListener('drop', [
    '$event',
  ])
  public onDrop(event: any): void {
    const transfer = FileDropDirective.getDataTransfer(event);
    if (!transfer) {
      return;
    }

    FileDropDirective.preventAndStop(event);
    this.fileOver.emit(false);
    this.readFile(transfer.files[0]);
  }

  private readFile(file: File): void {
    let reader = new FileReader();
    reader.onload = e => {
      this.onFileDrop.emit(reader.result);
    };
    reader.readAsText(file);
  }

  private static getDataTransfer(event: any | any): DataTransfer {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private static preventAndStop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private static haveFiles(types: any): boolean {
    if (!types) {
      return false;
    }

    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    }

    if (types.contains) {
      return types.contains('Files');
    }

    return false;
  }
}

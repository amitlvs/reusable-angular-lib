import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-at-custom-lib',
  template: `
    <button
      (click)="btnClick($event)"
      [style.backgroundColor]="bgColor"
      [style.color]="btnColor"
      [class]="btnClass"
    >
      {{ btnLabel }}
    </button>
  `,

  styles: [],
})
export class AtCustomLibComponent {
  @Input() bgColor: any;
  @Input() btnLabel: any;
  @Input() btnColor: any;
  @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() btnClass: any;

  btnClick(e: any) {
    this.btnClicked.emit(e);
  }
}

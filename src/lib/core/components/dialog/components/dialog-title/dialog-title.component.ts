import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'r-dialog-title',
  imports: [NgStyle],
  templateUrl: './dialog-title.component.html',
})
export class DialogTitle {
  aligned = input<boolean>(false);
}
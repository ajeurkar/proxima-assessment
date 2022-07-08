import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <section class="mt-1">
    <div class="example-button-row">
      <button mat-raised-button class="mx-1" >Basic</button>
      <button mat-raised-button class="mx-1" color="primary">Primary</button>
      <button mat-raised-button class="mx-1" color="accent">Accent</button>
      <button mat-raised-button class="mx-1" color="warn">Warn</button>
      <button mat-raised-button class="mx-1" disabled>Disabled</button>
      <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
    </div>
  </section>`,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

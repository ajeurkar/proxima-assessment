import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

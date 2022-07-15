import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons/buttons.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { CreateComponent } from './data-table/create.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ButtonsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    ReactiveFormsModule ,
    FormsModule
  ],
  providers: [],
  entryComponents: [CreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

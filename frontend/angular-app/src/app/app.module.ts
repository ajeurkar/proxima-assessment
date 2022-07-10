import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons/buttons.component';
import { AppRoutingModule } from './app-routing.module';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ButtonsComponent,
    CardLayoutComponent,
    DialogboxComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

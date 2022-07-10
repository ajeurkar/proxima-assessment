import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: 'datatable', component: DataTableComponent },
  { path: 'cardlayout', component: CardLayoutComponent },
  { path: '', component: CardLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

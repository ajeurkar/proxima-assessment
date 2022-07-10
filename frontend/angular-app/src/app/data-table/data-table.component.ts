import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DataService } from '../data.service';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-data-table',
  template: `
    <div style="margin:20px; margin-bottom: 100px;">
    <button style="margin-bottom: 10px;" mat-button (click)="openDialog('Add', {})" mat-flat-button color="primary">Add</button>   
    <input autofocus style="float: right;" placeholder="Type to search ..." [(ngModel)]="searchText" (keyup)="search()">
    <div>
      <ngx-datatable
        #mydatatable
        class="material"
        [headerHeight]="50"
        [limit]="5"
        [columnMode]="ColumnMode.standard"
        [footerHeight]="50"
        rowHeight="auto"
        [rows]="rows"
      >
        <ngx-datatable-column name="Name">
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-name'] = true"
              *ngIf="!editing[rowIndex + '-name']"
            >
              {{ value }}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'name', rowIndex)"
              *ngIf="editing[rowIndex + '-name']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="username">
        <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-username'] = true"
              *ngIf="!editing[rowIndex + '-username']"
            >
              {{ value }}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'username', rowIndex)"
              *ngIf="editing[rowIndex + '-username']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Email">
        <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-email'] = true"
              *ngIf="!editing[rowIndex + '-email']"
            >
              {{ value }}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'email', rowIndex)"
              *ngIf="editing[rowIndex + '-email']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Phone">
        <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-phone'] = true"
              *ngIf="!editing[rowIndex + '-phone']"
            >
              {{ value }}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'phone', rowIndex)"
              *ngIf="editing[rowIndex + '-phone']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Website">
        <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-website'] = true"
              *ngIf="!editing[rowIndex + '-website']"
            >
              {{ value }}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'website', rowIndex)"
              *ngIf="editing[rowIndex + '-website']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Actions">
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex">
          <div style="display:flex;">
          <button mat-raised-button color="primary" (click)="save()" aria-label="Click to save" style="margin-right: 2px;">
              <mat-icon>save</mat-icon></button>
            <button mat-raised-button color="primary" (click)="deleteValue(rowIndex)" aria-label="Click to delete" style="margin-left: 2px;">
              <mat-icon>delete</mat-icon>
            </button>
          </div>            
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
    </div>
  `,
  styleUrls: []
})
export class DataTableComponent {
  editing: any = {};
  rows: any = [];
  searchText: string = "";
  ColumnMode = ColumnMode;

  constructor(private dataService: DataService, public dialog: MatDialog) {
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe((result: any) => {
      this.rows = [...result];
    });
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.addValue(result.data);      
    });
  }

  updateValue(event: any, cell: any, rowIndex: number) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  deleteValue(rowIndex: number){
    var result = confirm("Want to delete " + this.rows[rowIndex].name + "'s data ?");
    if (result) {
      this.rows.splice(rowIndex,1);
      this.rows = [...this.rows];
    }    
  }

  addValue(value: any) {
    this.rows.push(value);
    this.rows = [...this.rows];
  }

  save(){
    this.rows = [...this.rows];
  }

  search(){
    if(this.searchText) {
      this.rows = this.rows.filter((item: any) => {
        if(item.name.includes(this.searchText) || item.username.includes(this.searchText)
        || item.email.includes(this.searchText) || item.phone.includes(this.searchText) || item.website.includes(this.searchText)){
          return item;
        } 
      });
    } else {
      this.getData();
    }
  }
    
}

import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-data-table',
  template: `
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
        <ngx-datatable-column name="Gender">
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row" let-value="value">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-gender'] = true"
              *ngIf="!editing[rowIndex + '-gender']"
            >
              {{ value }}
            </span>
            <select
              *ngIf="editing[rowIndex + '-gender']"
              (blur)="editing[rowIndex + '-gender'] = false"
              (change)="updateValue($event, 'gender', rowIndex)"
              [value]="value"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age">
          <ng-template ngx-datatable-cell-template let-value="value">
            {{ value }}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  styleUrls: []
})
export class DataTableComponent {
  editing: any = {};
  rows: any = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://swimlane.github.io/ngx-datatable/assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event: any, cell: any, rowIndex: number) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}

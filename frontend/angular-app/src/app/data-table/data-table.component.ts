import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CreateComponent } from './create.component';

@Component({
  selector: 'app-data-table',
  template: `
    <div>
      <div style="margin: 50px 50px 50px 50px;">
        Search ToDO <input type="text" (keyup)="filterDatatable($event)" />
        <div class="actions">
          <a
            href="javascript:void(0)"
            (click)="OpenModal()"
            style="    float: right;
          margin-top: -23px;
          background-color: hsl(184deg 29% 46%);color:black"
          >
            Add
          </a>
        </div>
      </div>
      <ngx-datatable
        #mydatatable
        class="material"
        [headerHeight]="50"
        [limit]="5"
        [columnMode]="ColumnMode.force"
        [footerHeight]="50"
        rowHeight="auto"
        [rows]="rows"
      >
        <ngx-datatable-column name="No">
          <ng-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-row="row"
            ngx-datatable-cell-template
          >
            {{ rowIndex + 1 }}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Title">
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-row="row"
          >
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-title'] = true"
              *ngIf="!editing[rowIndex + '-title']"
            >
              {{ value }}
            </span>
            <input
              autofocus
              (blur)="updateValue($event, 'title', rowIndex)"
              *ngIf="editing[rowIndex + '-title']"
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Description">
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-row="row"
            let-value="value"
          >
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-description'] = true"
              *ngIf="!editing[rowIndex + '-description']"
            >
              {{ value }}
            </span>
            <input
            autofocus
            (blur)="updateValue($event, 'description', rowIndex)"
            *ngIf="editing[rowIndex + '-description']"
            type="text"
            [value]="value"
          />
           
          </ng-template>
        </ngx-datatable-column>
        
        <ngx-datatable-column name="Action" widht="300">
          <ng-template
            let-row="row"
            let-expanded="expanded"
            ngx-datatable-cell-template
          >
            <div class="text-left">
              <a
                title="Delete"
                href="javascript:void(0);"
                style="background-color: hsl(184deg 29% 46%);color:black"
                (click)="Delete(row)"
                >Delete</a
              >
            </div>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  styleUrls: [],
})
export class DataTableComponent {
  editing: any = {};
  rows: any = [];

  ColumnMode = ColumnMode;
  filteredData: any[] = [];
  columnsWithSearch: string[] = [];
  matDialogRef: MatDialogRef<CreateComponent>;
  name: string = '';
  constructor(private matDialog: MatDialog) {
    let jsonString ="[{\"title\":\"EthelPrice2\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal2\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice3\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal3\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice4\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal4\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice5\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal5\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice6\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal6\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice7\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal7\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice8\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal8\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice9\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal9\",\"description\":\"testtodo\"},{\"title\":\"EthelPrice\",\"description\":\"testtodo\"},{\"title\":\"ClaudineNeal\",\"description\":\"testtodo\"}]";

    let obj = JSON.parse(jsonString);
    this.rows = obj;
    this.filteredData = this.rows;
    // for specific columns to be search instead of all you can list them by name
    this.columnsWithSearch = Object.keys(this.rows[0]);
    // this.fetch((data: any) => {
    //   this.rows = data;
    //   this.filteredData = this.rows;
    //   // for specific columns to be search instead of all you can list them by name
    //   this.columnsWithSearch = Object.keys(this.rows[0]);
    // });
  }

  OpenModal() {
    this.matDialogRef = this.matDialog.open(CreateComponent, {
      // data: { name: this.name },
      disableClose: false,
    });

    this.matDialogRef.afterClosed().subscribe((res) => {
      if (res.event === 'add') {
        let rowData = {
          title: res.title,
          description: res.description,
        };
        var lastIndex = Object.keys(this.rows).length;

        this.rows.splice(lastIndex, 0, rowData);

        this.rows = [...this.rows];
      }
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open(
      'GET',
      `https://swimlane.github.io/ngx-datatable/assets/data/company.json`
    );

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  Delete(obj: any) {
    this.rows = this.rows.filter((value: any, key: any) => {
      return value.title != obj.title;
    });
    this.rows = [...this.rows];
  }

  // filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let filter = event.target.value.toLowerCase();

    // assign filtered matches to the active datatable
    this.rows = this.filteredData.filter((item) => {
      // iterate through each row's column data
      for (let i = 0; i < this.columnsWithSearch.length; i++) {
        var colValue = item[this.columnsWithSearch[i]];

        // if no filter OR colvalue is NOT null AND contains the given filter
        if (
          !filter ||
          (!!colValue &&
            colValue.toString().toLowerCase().indexOf(filter) !== -1)
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
  }

  updateValue(event: any, cell: any, rowIndex: number) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}

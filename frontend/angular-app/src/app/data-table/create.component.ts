import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'create',
  template: `
    <div style="width:300px">
      <h2 mat-dialog-title>Add ToDo</h2>
      <div mat-dialog-content>
        <div>
          <mat-form-field>
            <input matInput [(ngModel)]="title" placeholder="Enter title" />
          </mat-form-field>
        </div>
        <div>
          <mat-form-field>
            <input
              matInput
              [(ngModel)]="description"
              placeholder="Enter description"
            />
          </mat-form-field>
        </div>
      </div>
      <div mat-dialog-actions align="end">
        <span>
          <button
            type="button"
            mat-flat-button
            color="primary"
            [mat-dialog-close]="true"
            (click)="addAction()"
          >
            Add
          </button>
          <button
            type="button"
            mat-stroked-button
            color="primary"
            (click)="CloseDialog()"
          >
            Cancel
          </button>
        </span>
      </div>
    </div>
  `,
})
export class CreateComponent {
  title: string;
  description: string;
  constructor(
    private _mdr: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    // this.name = data.name;
  }

  addAction() {
    this._mdr.close({
      event: 'add',
      description: this.description,
      title: this.title,
    });
  }
  CloseDialog() {
    this._mdr.close(false);
  }
}

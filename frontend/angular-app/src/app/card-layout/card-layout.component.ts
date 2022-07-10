import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {
  
  proximaList: any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result: any) => {
      this.proximaList = result;
    });         
  }
}

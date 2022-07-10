import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  configUrl = "../assets/proximatodolist.json";
  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get<any>(this.configUrl);
  }  
}

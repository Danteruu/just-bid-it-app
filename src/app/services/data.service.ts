import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from '../models/Auction';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = 'http://localhost:5000';

  constructor(private _http: HttpClient) { }

  getAuctions() {
    return this._http.get<Auction[]>(this.apiUrl + '/auction/featured');
  }
}

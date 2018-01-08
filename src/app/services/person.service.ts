import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { IPerson } from './../models/IPerson';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  carsList : IPerson[];
  _baseUrl : string = "http://localhost:13718/api/";
  _getCarsUrl : string = "Person"; 
  options = new RequestOptions({
    withCredentials : true
}); 
  constructor(private http: Http)  { }
  public getPersons() {
    return this.http.get(this._baseUrl + this._getCarsUrl, this.options)
    .toPromise();
}

}

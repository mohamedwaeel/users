import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersdataService {
  constructor(private _HttpClient: HttpClient) {}

  getAllData(): Observable<any> {
    return this._HttpClient.get('https://reqres.in/api/users?page={page}');
  }
  getUserData(id: number): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`);
  }
}

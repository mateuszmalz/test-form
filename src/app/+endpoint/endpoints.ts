import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Endpoints {

  private readonly BASE_URL = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<{ users: { userId: number }[] }> {
    const url = this.BASE_URL + '/users';
    return this.http.get<{ users: { userId: number }[] }>(url);
  }
}

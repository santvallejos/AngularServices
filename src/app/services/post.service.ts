import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "https://api.escuelajs.co/api/v1/products?limit=20&offset=20";

  constructor(private http: HttpClient) {}

  getPost(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}

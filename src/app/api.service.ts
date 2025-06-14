import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://mail-api-qntb.onrender.com/api/v1/mail/sendMail';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  sentMail(data: any) {
    return this.http.post(this.apiUrl, data, { headers: this.headers });
  }
}

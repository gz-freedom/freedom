import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ReadLater } from "./read-later/read-later";
import { Observable } from 'rxjs';

const readLaterUrl = "http://localhost:3000/read/read-later";

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private http: Http) { }

  public getAllReads(): Observable<any> {
    return this.http.get(readLaterUrl);
  }

  public addRead(read: ReadLater): Observable<any> {
    return this.http.post(readLaterUrl, read);
  }
}

import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Lottery } from "./Lottery";

const apiUrl = 'http://localhost:3000/wealth/lottery/';
const getLotteryUrl = environment.lotteryUrl;

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  getAllLotteries():Observable<any> {
    return this.http.get(apiUrl);
  }

  getLotteries(count: number):Observable<any> {
    debugger;
    var url = `${getLotteryUrl}ssq-${count}.json?callback=__ng_jsonp__.__req0.finished`;
    return this.jsonp.get(url);
  }

  saveLotteries(lotteries: Lottery[]): Observable<any> {
    return this.http.post(apiUrl, lotteries);
  }
}

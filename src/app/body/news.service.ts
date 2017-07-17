import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
@Injectable()
export class NewsService {
  newsData:string;
  constructor(private http:Http){}
  newsCall(newsSource:string){
    return this.http.get('https://newsapi.org/v1/articles?source='+newsSource+'&apiKey=48cc50cfae734ab9a02e2a0924cc9f55');
  }
}

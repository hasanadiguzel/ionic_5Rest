import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiURL="http://localhost:8080/php-slim-rest-master/slimapp/api/";

  constructor(private httpclient: HttpClient) { }


  veriGonder(talep, veri) {
    return this.httpclient.post(this.apiURL+talep, veri);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  public url = environment.backendUrl;

  constructor(private http: HttpClient) {}

  makeRequest(page = null, type = null, data = null, resType: string = null) {
      let headers = new HttpHeaders();
      let requestOptions, token = this.getToken();
      if (token) {
          headers = headers.set('Authorization', 'Basic ' + token);
      }
      headers = headers.set('Accept', 'application/json');
      if (type === 'Post' || type === 'Put' || type === 'Patch') {
          headers = headers.set('Content-Type', 'application/json');
          requestOptions = {
              headers: headers,
              body: JSON.stringify(data),
              responseType: !resType ? 'json' : 'text'
          };
      } else if (type === 'Get' || type === 'Delete') {
          requestOptions = {
              headers: headers,
              responseType: !resType ? 'json' : 'text'
          };
      }
      return this.http.request(type, this.url + page, requestOptions);
  }

  getToken() {
      return window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
  }

}

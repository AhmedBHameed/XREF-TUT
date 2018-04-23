import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { QueriesService } from './queries.service';

@Injectable()
export class HttpService {

  private url = environment.backendUrl;

  constructor(private http: HttpClient, private qs: QueriesService) {}

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
      } else if (type === 'Binary') {
        type = 'Post';
        requestOptions = {
            headers: headers,
            body: data,
            responseType: 'json'
        };
      }
      return this.http.request(type, this.url + page, requestOptions);
  }
  // makeBinaryRequest(page = null, type = null, data = null) {
  //   let header = new Headers(),
  //     opt;
  //   if (type === 'Post') {
  //     header.append('Accept', 'application/json');
  //     // header.append("Content-Type", "multipart/form-data; charset=utf-8; boundary=\"------WebKitFormBoundary\"");
  //     opt = new RequestOptions({
  //       headers: header,
  //       url: this.url + page,
  //       method: RequestMethod[type],
  //       body: data
  //     });
  //   }
  //   if (type === 'Get') {
  //     header.append('Accept', 'application/json');
  //     opt = new RequestOptions({
  //       headers: header,
  //       url: this.url + page,
  //       method: RequestMethod[type]
  //     });
  //   }
  //   return this.http.request(new Request(opt));
  // }
  private stringify(queryObj: any) {
    return JSON.stringify(queryObj)
                .replace(/\\n/g, '')
                .replace(/\\&/g, '')
                .replace(/\\r/g, '')
                .replace(/\\t/g, '')
                .replace(/\\b/g, '')
                .replace(/\\f/g, '');
  }
  binaryRequest(GrqphQLQueryObj: any, objOfBinaries: any) {
    const requestObject: any = new FormData();
    requestObject.append('queryJsonAsString', this.stringify(this.qs.formAddUserQuery(GrqphQLQueryObj)) );
    // tslint:disable-next-line:forin
    for (let key in objOfBinaries) {
      requestObject.append(key, objOfBinaries[key]);
    }
    console.log(this.qs.formAddUserQuery(GrqphQLQueryObj), objOfBinaries);
    return this.makeRequest('graphql', 'Binary', requestObject);
  }

  getToken() {
      return window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
  }

}

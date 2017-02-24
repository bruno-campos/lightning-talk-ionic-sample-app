import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Resource {
  apiUrl = 'http://restapi.co/api/';
  apiKey = 'XXXXX';

  constructor(public http: Http) {
  }

  index(resourceName) {
    return this.http.get(this.resourceUrl(resourceName)).map(res => res.json());
  }

  create(resourceName, data) {
    return this.http.post(this.resourceUrl(resourceName), {resource: data}).map(res => res.json());
  }

  resourceUrl(resourceName: String) {
    return `${this.apiUrl}${this.apiKey}/${resourceName}`;
  }
}

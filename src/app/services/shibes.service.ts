import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShibesService {

  constructor(private http: HttpClient) { }

  getShibes(){
    return this.http.get("http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true");
  }
}

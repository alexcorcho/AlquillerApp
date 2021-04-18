import { Injectable, NgZone } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private _apiLocalURL = '../../assets/API-CORCHO/API_LOCAL.json';
  constructor(private Http: HttpClient) { }

  getJson(): Observable <any>{
    return this.Http.get(this._apiLocalURL );
  }


}

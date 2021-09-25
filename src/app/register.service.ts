import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class RegisterService{
  
  constructor(private httpClient: HttpClient) { }

  
  sendData(data: any){
    return this.httpClient.post<any>("https://api.halfpricebazar.com/v1/users", data);
}
 
checkData(data:any){
  return this.httpClient.post<any>("https://api.halfpricebazar.com/v1/auth/login/email", data);
}

}
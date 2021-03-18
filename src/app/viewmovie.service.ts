import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewmovieService {

  constructor(private httpClient:HttpClient) { }
  url="http://localhost:8080/customer-ang"

  public getAllMovie():Observable<any>{
    return this.httpClient.get<any>(this.url,{
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTE1MTkxLCJleHAiOjE2MTYxNjU1MTh9.Bw7gXC1KRn7j5HYu5kzTYFuMQwOjRNShG8njEAx5XHo")
     }
     ).pipe();
   }

  public add(id:number){
    return this.httpClient.post<any>(`http://localhost:8080/add-ang/${id}`,id,{
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTE1MTkxLCJleHAiOjE2MTYxNjU1MTh9.Bw7gXC1KRn7j5HYu5kzTYFuMQwOjRNShG8njEAx5XHo")
     }
     ).pipe();
   }
  }
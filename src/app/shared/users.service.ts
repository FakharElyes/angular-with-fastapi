import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  readonly BaseURI ="http://127.0.0.1:8000/";


  findAllUsers(){
    return this.http.get(this.BaseURI);
  }

  createUser(body){
    return this.http.post(this.BaseURI, body);
  }

  findUser(id){
    return this.http.get(this.BaseURI + id)
  }

  updateUser(id,body){
    return this.http.put(this.BaseURI + id , body)
  }

  deleteUser(id){
    return this.http.delete(this.BaseURI + id)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
 
  private baseAPIUrl = "https://jsonplaceholder.typicode.com/posts";
  private newJoinersUrl = "http://localhost:3000/posts";
  private newRegisteredUserUrl = "http://localhost:3000/registeredUsers";
 private URL = "https://jsonplaceholder.typicode.com/posts";
  constructor( private http: HttpClient ) {
   }

  getAllDetails(){
    console.log("Method calling");
  }

  getPictureDetails(){
  
    return this.http.get(this.baseAPIUrl);
  }

  getNewJoinersDetails(){
    return this.http.get(this.newJoinersUrl)
  }
  getpracticedata(){
    return this.http.get(this.URL);
  }


  registeredUser(registermodel:any){
   console.log(registermodel); 
    return this.http.post<any>( this.newRegisteredUserUrl, registermodel);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './userDataType'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/users';

  getUsers(){
    return this.http.get<user[]>(this.apiUrl);
  }

  getUserById(id: string | undefined){
    return this.http.get<user>(`${this.apiUrl}/${id}`);
  }

  addUser(data: user){
    return this.http.post<user>(this.apiUrl, data);
  }

  updateUser(data: user, id: string){
    return this.http.put<user>(`${this.apiUrl}/${id}`, data);
  }

  deleteUser(id: string){
    return this.http.delete<user>(`${this.apiUrl}/${id}`);
  }

}

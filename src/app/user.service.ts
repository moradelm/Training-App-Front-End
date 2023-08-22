import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user'; // backend URL

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // login(username: string, password: string): Observable<any> {
  //   const loginData = {
  //     username: username,
  //     password: password
  //   };
  //   return this.http.post(`${this.baseUrl}/login`, loginData);
  // }
  login(username: string, password: string): Observable<any> {
  const loginData = {
    username: username,
    password: password
  };
  
  return this.http.post(`${this.baseUrl}/login`, loginData)
    .pipe(
      tap((response) => {
        console.log('Login response:', response);
      }),
      catchError((error) => {
        console.log('Login error:', error);
        throw error; // Rethrow the error to be caught by the component
      })
    );
}


  getUserNutrition(userId: string): Observable<any> {
  const url = `${this.baseUrl}/${userId}/nutrition`;
  return this.http.get(url).pipe(
    tap((response: any) => {
      console.log('Nutrition API Response:', response);
    }),
    catchError((error: any) => {
      console.error('Error fetching nutrition data:', error);
      return throwError(error);
    })
  );
}

}

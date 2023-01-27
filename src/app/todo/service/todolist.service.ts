import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private baseUrl = 'https://localhost:7134/todolist/v1';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}`)
      .pipe(
        map(response => response),
        catchError(this.handleError('getAll', []))
      );
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(
        map(response => response),
        catchError(this.handleError(`getById id=${id}`))
      );
  }

  add(data: Todo): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data)
      .pipe(
        catchError(this.handleError('add'))
      );
  }

  update(id: number, data: Todo): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data)
      .pipe(
        catchError(this.handleError(`update id=${id}`))
      );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError(`delete id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

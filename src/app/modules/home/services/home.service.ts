import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, pipe } from 'rxjs';
import { IUser, IUsersResponseDto } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private _users: Map<string, IUser> = new Map<string, IUser>();
  private users$: Subject<Map<string, IUser>> = new Subject();

  public getAllUsers(): Observable<Map<string, IUser>> {
    return this.users$.asObservable();
  }

  public getUser(key: string): Observable<IUser> {
    return this.users$.asObservable().pipe(map(dataMap => dataMap.get(key))) as Observable<IUser>;
  }

  public setUser(key: string, value: IUser): void {
    this._users.set(key, value);
    this.setUsersLocalStorage(this._users)
  }

  public async loadUsers(): Promise<void> {
    try {
      const usersLocalStorage = await localStorage.getItem('users');
      usersLocalStorage ? this.getUsersLocalStorage(usersLocalStorage) : this.getUsersApi();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private getUsersLocalStorage(usersLocalStorage: string): void {
    const users: Map<string, IUser> = new Map(JSON.parse(usersLocalStorage));

    users.forEach((value, key) => this._users.set(key, value));

    this.users$.next(users);
  }

  private getUsersApi(): void {
    this.http.get<IUsersResponseDto>("https://randomuser.me/api/?page=1&results=10").subscribe(({ results }) => {

      results.forEach(obj => this._users.set(obj.login.uuid, obj));

      this.users$.next(this._users);

      this.setUsersLocalStorage(this._users)

    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }

  private setUsersLocalStorage(users: Map<string, IUser>): void {
    localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
  }
}

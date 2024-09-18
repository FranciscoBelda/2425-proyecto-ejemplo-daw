import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceRandomUsers} from "../common/interfaceRandomUsers";

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://randomuser.me/api/?seed=solvam&results=20";
  constructor() { }

  getUsers(): Observable<InterfaceRandomUsers>{
    return this.http.get<InterfaceRandomUsers>(this.URL);
  }
}

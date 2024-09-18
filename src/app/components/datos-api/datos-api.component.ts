import {Component, inject, OnInit} from '@angular/core';
import {RandomUsersService} from "../../services/random-users.service";
import {InterfaceRandomUsers} from "../../common/interfaceRandomUsers";
import {DatePipe, NgStyle} from "@angular/common";
import {SpinnerComponent} from "../spinner/spinner.component";

@Component({
  selector: 'app-datos-api',
  standalone: true,
  imports: [
    NgStyle,
    DatePipe,
    SpinnerComponent
  ],
  templateUrl: './datos-api.component.html',
  styleUrl: './datos-api.component.css'
})
export class DatosApiComponent implements OnInit{
  private service: RandomUsersService = inject(RandomUsersService);
  apiData!: InterfaceRandomUsers;

  ngOnInit(): void {
    this.loadUsers();
  }


  private loadUsers() {
    this.service.getUsers().subscribe(
      {
        next: value => this.apiData = value,
        error: err => console.error(err),
        complete: () => console.log('Users loaded')
      }
    )
  }
}

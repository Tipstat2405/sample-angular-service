import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.fetchUsers();
  }

  // fetchUsers() {
  //   this.loading = true;
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(
  //       (data: any) => {
  //         this.users = data;
  //         this.loading = false;
  //       },
  //       error => {
  //         console.error('Error fetching users', error);
  //         this.loading = false;
  //       }
  //     );
  // }
}

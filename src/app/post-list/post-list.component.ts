import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.fetchPosts();
  }

  // fetchPosts() {
  //   this.loading = true;
  //   this.http.get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe(
  //       (data: any) => {
  //         this.posts = data;
  //         this.loading = false;
  //       },
  //       error => {
  //         console.error('Error fetching posts', error);
  //         this.loading = false;
  //       }
  //     );
  // }
}

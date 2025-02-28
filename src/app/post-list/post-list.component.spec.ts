import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should fetch posts data', () => {
    const mockPosts = [
      { id: 1, title: 'Post One', body: 'This is post one' },
      { id: 2, title: 'Post Two', body: 'This is post two' }
    ];

    //component.fetchPosts();

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);

    fixture.detectChanges();

    expect(component.posts.length).toBe(2);
    expect(component.posts[0].title).toBe('Post One');
  });

  afterEach(() => {
    httpMock.verify();
  });
  
});

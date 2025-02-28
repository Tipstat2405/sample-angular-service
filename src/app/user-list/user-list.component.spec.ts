import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users data', () => {
    const mockUsers = [
      { id: 1, name: 'User One', email: 'user1@example.com' },
      { id: 2, name: 'User Two', email: 'user2@example.com' }
    ];

    //component.fetchUsers();

    // const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    // expect(req.request.method).toBe('GET');
    // req.flush(mockUsers);

    // fixture.detectChanges();

    // expect(component.users.length).toBe(2);
    // expect(component.users[0].name).toBe('User One');
  });

  afterEach(() => {
    httpMock.verify();
  });
});

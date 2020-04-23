import { TestBed ,inject } from '@angular/core/testing';
import {HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    imports: [
      HttpClientTestingModule
    ],
    });
    service = TestBed.inject(UserService);
  });

  it('expects service to fetch data',
  inject([HttpTestingController, UserService],
    (httpMock: HttpTestingController, service: UserService) => {
      // We call the service
      service.getUsers().subscribe(data => {
        // expect(data.id).toBe(1);
        // expect(data.first_name).toBe('George');
        // expect(data.last_name).toBe('Bluth');
        // expect(data.email).toBe('george.bluth@reqres.in');
        // expect(data.length).toBe(6);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('https://reqres.in/api/users');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush({data: Object});
    })
);

it('should create an employee and return it', () => {

  const newUser = {  
                          id:1,
                          first_name:"George",
                          last_name:"Bluth",
                          email:'george.bluth@reqres.in' 
                        };

  service.createUser(newUser).subscribe(
    data => expect(data).toEqual(newUser, 'should return the user'),
    fail
  );

  // addEmploye should have made one request to POST employee
  const req = httpMock.expectOne('https://reqres.in/api/users');
  expect(req.request.method).toEqual('POST');
  expect(req.request.body).toEqual(newUser);

  // Expect server to return the employee after POST
  const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newUser });
  req.event(expectedResponse);
  req.flush({data: Object});
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});

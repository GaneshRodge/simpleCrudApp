import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Router} from '@angular/router';
import { Location } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import {routes} from './app-routing.module'

describe('AppComponent', () => {
  let location:Location;
  let router:Router;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        CreateUserComponent,
        ListUserComponent
      ],
    })

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation(); 
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));
  
  it('navigate to "" redirects you to /create-user', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/create-user");
    });
  }));

  it('navigate to "list-user" takes you to /list-user', fakeAsync(() => {
    router.navigate(["/list-user"]).then(() => {
      expect(location.path()).toBe("/list-user");
    });
  }));
  
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponent } from './list-user.component';
import { UserService } from 'src/app/service/user.service';


describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    service = TestBed.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the header text "User Details".', async(() => {
    const fixture = TestBed.createComponent(ListUserComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('User Details');
  }));

  it('should load user list', () => {
    spyOn(service, 'getUsers');
    component.ngOnInit();
    fixture.detectChanges();
    expect(service.getUsers).toHaveBeenCalledWith();
    expect(component.getUserList).toEqual([
      {id: 1, first_name: 'George', last_name:'Bluth', email:'george.bluth@reqres.in'},
      {id: 2, first_name: 'Janet', last_name:'Weaver', email:'janet.weaver@reqres.in'},
      {id: 3, first_name: 'Emma', last_name:'Wong', email:'emma.wong@reqres.in'},
      {id: 4, first_name: 'Eve', last_name:'Holt', email:'eve.holt@reqres.in'},
      {id: 5, first_name: 'Charles', last_name:'Morris', email:'charles.morris@reqres.in'},
      {id: 6, first_name: 'Tracey', last_name:'Ramos', email:'tracey.ramos@reqres.in'}]
      
      );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

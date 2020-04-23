import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CreateUserComponent } from './create-user.component';
import { DebugElement } from '@angular/core';
import { createComponent } from '@angular/compiler/src/core';


describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      imports : [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should display the header text "Create User".', async(() => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Create User');
  }));

  it('form invalid when empty', () => {
    component.addForm.controls.firstName.setValue('');
    component.addForm.controls.lastName.setValue('');
    component.addForm.controls.email.setValue('');
    expect(component.addForm.valid).toBeFalsy();
  });

  it('firstName field validity', () => {
    const firstname = component.addForm.controls.firstName;
    expect(firstname.valid).toBeFalsy();

    firstname.setValue('');
    expect(firstname.hasError('required')).toBeTruthy();

  });

  it('lastName field validity', () => {
    const lastname = component.addForm.controls.lastName;
    expect(lastname.valid).toBeFalsy();

    lastname.setValue('');
    expect(lastname.hasError('required')).toBeTruthy();

  });

  it('email field validity', () => {
    const email = component.addForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addForm).toHaveBeenCalledTimes(1);
  });

  it('form should be valid', () => {
    component.addForm.controls.firstName.setValue('ganesh');
    component.addForm.controls.lastName.setValue('rodge');
    component.addForm.controls.email.setValue('ganeshro@asd.com');
    expect(component.addForm.valid).toBeTruthy();
  });

  it('should call onReset method', () => {
    spyOn(component, 'onReset');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addForm).toHaveBeenCalledTimes(1);
    expect(component.addForm).toBeNull();
  });
});

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  addForm: FormGroup;
  submitted:boolean;

  constructor(private formBuilder: FormBuilder, private userservice:UserService) { }

  ngOnInit(){
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
        return;
    }
    alert('SUCCESS!!');
    this.userservice.createUser(this.addForm.value)
      .subscribe( data => {
        console.log(data);
      });
  }

  onReset() {
    this.addForm.reset();
  }

}

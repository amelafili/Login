import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  selectedUser = null;
  users = [
    {'id': 1, 'position': 1, 'first_name': 'John', 'last_name': 'Adams'},
    {'id': 2, 'position': 2, 'first_name': 'Joan', 'last_name': 'Smith'}
  ]
  h1Style: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private data: DataService) {
   
    this.form =this.formBuilder.group( {
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
   }
 
  

   onSubmit(e) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.success = true;

    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username, password);
    return false;

  
   }

   
   updateSelectedUser(userId) {
    this.selectedUser = this.users.find(el => {
      return el.id === userId
    })
  }
   ngOnInit() {
    
  }
    
}


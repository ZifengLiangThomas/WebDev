import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from "../../app.model"
import { FormBuilder, AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  loginForm:FormGroup;
  onSubmit() { 
    if (!this.loginForm.valid) {
        alert("Please enter your account name and password");
    }
    else{
      this.router.navigate(['/main', this.loginForm.get('accountName').value]);
    }
   }
  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm =  fb.group({
         'accountName': [null, [Validators.required]],
         'password': [null, [Validators.required]]
    })
   }

  ngOnInit() {
  }

}

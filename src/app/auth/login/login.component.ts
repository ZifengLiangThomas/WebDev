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
  myRouter : Router;
  onSubmit() { 
    if (!this.loginForm.valid) {
        alert("Please enter your account name and password");
    }
    else{
      this.myRouter.navigate(['/main', this.loginForm]);
    }
   }
  constructor(fb: FormBuilder, router: Router) {
    this.myRouter = router;
    this.loginForm =  fb.group({
         'accountName': [null, [Validators.required]],
         'password': [null, [Validators.required]]
    })
   }

  ngOnInit() {
  }

}

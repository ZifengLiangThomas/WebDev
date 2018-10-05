import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from "../../app.model"
import { passValidator} from './customValidators'
import { FormBuilder, AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
  title = 'registration';
  registrationForm:FormGroup;
  onSubmit() { 
    if (!this.registrationForm.valid) {
        alert("One of the information is missing or incorrect");
    }
    else{
      alert("You can log in now!");
      this.registrationForm.reset();
    }
   }
  
  constructor(fb: FormBuilder, private router: Router){
    this.registrationForm =  fb.group({
      'accountName': [null, [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z0-9]*$")]],
      'displayName': [null],
      'email': [null, [Validators.required, Validators.email]],
      'phoneNumber' : [null, [Validators.required, Validators.pattern("^[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}$")]],
      'dateOfBirth' :[null, [Validators.required]],
      'zipcode' :[null, [Validators.required, Validators.pattern("^[0-9]{5}$")]],
      'pw1': [null, Validators.required],
      'pw2': [null, [passValidator, Validators.required]]
    });
  }
  ngOnInit() {
  }

}






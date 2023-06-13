import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public logInForm!: FormGroup;
  email!: string;
  password!: string;
  myService: any;

  adminEmail = "gayatri@gmail.com";
  adminPassword ="12345678";
  studentEmail= "potdar@gmail.com";
  studentPassword = "11111111";


constructor( private formBuilder: FormBuilder, private router:Router ){}

ngOnInit(){
  
 
  this.logInForm = this.formBuilder.group({

    email: new FormControl('',[ Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]),
   
  })
}

  

  submit(){
    console.log(this.logInForm.value);
    if(this.logInForm.value.email == this.adminEmail && this.logInForm.value.password == this.adminPassword ){

      alert("Log In Successful.");
      this.router.navigate(["/book"]);
      
    }else if(this.logInForm.value.email == this.studentEmail && this.logInForm.value.password == this.studentPassword){
      alert("Log In Successful.");
      this.router.navigate(["/data"]);
    }else
    {
      alert("Log in fail");
    }
  }
}
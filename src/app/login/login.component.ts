import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  logInForm: any;
  email: any;
  password: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {


    this.logInForm = this.formBuilder.group({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(8)]),

    })
  }


  submit() {
    this.http.get<any>('http://localhost:3000/registeredUsers').subscribe((result) => {
      console.log(result);
      const user = result.find((a: any) => {
        return (
          a.email == this.logInForm.value.email && a.password == this.logInForm.value.password
        );
      })
      if (user) {
        console.log(user);
        alert("Login Succesful.");
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(["/home"]);

      }
      else {
        alert("Invalid email or password");
      }
    },
      (error: any) => {
        alert("Something went wrong");
      }
    );
  }


}

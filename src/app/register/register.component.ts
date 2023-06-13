import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewServiceService } from '../Services/new-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm!: FormGroup;
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  phone!: number;

  username: any;
  userEmail = "onkardada@gmail.com";

  constructor(private router: Router, private formBuilder: FormBuilder,private myService:NewServiceService,
    private http: HttpClient) { }

  ngOnInit() {
    this.username = localStorage.getItem("name");
    console.log(this.username);

    this.registerForm = this.formBuilder.group({

      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      imageURl: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),


    })
  }
  submitdata() {
    let registermodel = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phone: this.phone,
      profilePic:this.imageURl,
    }


    console.log(registermodel);
    this.http.get<any>('http://localhost:3000/registeredUsers').subscribe((result) => {
      console.log(result);
      const user = result.find((a: any) => {
        return (
          a.email == this.registerForm.value.email
        );
      })
      if (user) {
        alert("User is already exist or Try another email.");
        this.router.navigate(["/login"]);
      }
      else {
        this.http.post<any>('http://localhost:3000/registeredUsers', registermodel).subscribe((data)=>{
             console.log(data);
             alert("Registration Successful.");
             this.router.navigate(["/login"]);
             this.registerForm.reset();
           });

      }
    },
      (error: any) => {
        alert("Something went wrong");
      }
    );
    // this.http.post<any>('http://localhost:3000/registeredUsers', registermodel).subscribe((data)=>{
    //   console.log(data);
    // });

  }

  message:any;
  imageURl: any;

  selectFile(event:any){
    console.log(event);
    var typeOfImg = event.target.files[0].type;
    if(typeOfImg.match(/image\/*/) == null )
    {
      this.message = "only images can add";
      return;
    }
    
    var readImg = new FileReader();
    readImg.readAsDataURL(event.target.files[0]);

    readImg.onload = (_event)=>{
       this.message = "";
       this.imageURl = readImg.result;
       console.log(this.imageURl); 
      }

  }

}

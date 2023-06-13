import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AlertComponent } from '../alert/alert.component';
import { NewServiceService } from '../Services/new-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  rollno = "47";

  public registerForm!: FormGroup;
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!:string;
  phone!:number;
  username:any;
  surname:any;

  today = Date();

  constructor(private router:Router,private toastr: ToastrService, private formBuilder: FormBuilder , private myService : NewServiceService , public dialog: MatDialog){}
  
  ngOnInit(){
     this.username = localStorage.getItem("name");
     console.log(this.username);
     this.surname = localStorage.getItem("surname");
     console.log(this.surname);
    this.registerForm = this.formBuilder.group({

      name: new FormControl('', Validators.required),
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),
      confirmPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(8)]),
      phone: new FormControl('', Validators.required)
      
    })
  
    this.getData();
  }

    navigateToOtherPage(){
        this.router.navigate(["/home"]);

    }
    
    submit(){
      console.log(this.registerForm.value);
    }



    getData(){
    this.myService.getAllDetails();
    }



    //it is for same passwords and confirmpassword
    // equalto(field_name: any): ValidatorFn {
    //   return (control: AbstractControl): { [key: string]: any } => {
    //     // eslint-disable-next-line prefer-const
    //     let input = control.value;
  
    //     // eslint-disable-next-line prefer-const
    //     let isValid = control.root.value[field_name] == input;
    //     // eslint-disable-next-line curly
    //     if (!isValid) return { equalTo: { isValid } };
    //     // eslint-disable-next-line curly
    //     else return null;
    //   };
    // }

    toster(){
      this.toastr.success("This is our toster..","Dialog");
  
    }
    openDialog(){
      const dialogRef = this.dialog.open(AlertComponent);
    }
}


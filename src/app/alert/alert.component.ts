import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NewServiceService } from '../Services/new-service.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
public showAlert: boolean = false;
details:any;
 
constructor(private toastr:ToastrService , private myService : NewServiceService){}
indicate(){

  if(this.showAlert){
    return
  }
  this.showAlert=true;
  setTimeout(()=> this.showAlert = false, 2300)
}

showToastr(){
 this.toastr.success("This is toaster Alert");
}

newStudentData(){
  this.myService.getNewJoinersDetails().subscribe((data) =>{
   this.details = data;
   console.log(this.details); 
  })

}

ngOnInit(){
  this.newStudentData();
}

}

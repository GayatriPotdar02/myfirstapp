import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
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

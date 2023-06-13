import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-indo',
  templateUrl: './detail-indo.component.html',
  styleUrls: ['./detail-indo.component.scss']
})
export class DetailIndoComponent {

  getCardDetails:any;
  selectedCompany:any;
  showData!: any;


  ngOnInit()
  {
    this.showData=false;
    this.getCardDetails =  JSON.parse(localStorage.getItem("card") || "");
    console.log(this.getCardDetails );
  }


submit(){
    this.showData = this.selectedCompany
}

}

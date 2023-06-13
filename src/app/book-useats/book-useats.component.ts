import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
//import { MatChipList } from'@angular';

@Component({

  selector: 'app-book-useats',
  templateUrl: './book-useats.component.html',
  styleUrls: ['./book-useats.component.scss']
})
export class BookUSeatsComponent {

  constructor( private router:Router){}
  details = [
    {
      id: 1,
      name: 'Gayatri',
      profile:'../assets/img/student.jpeg',
      location:'Solapur'
    }
    ,    {
      id: 2,
      name: 'Admin',
      profile:'../assets/img/admin.png',
      location:'Pune'
    }
  ];

  viewdetails(detail: any){
    
    localStorage.setItem("detailInfo", JSON.stringify(detail));
    this.router.navigate(["/home"])
   
  }

  // seatList:MatChipList;
}

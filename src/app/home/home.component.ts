import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewServiceService } from '../Services/new-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title: any;
  isItValid: boolean = true;
  name = "Gayatri";
  surname = "Potdar";
  showText: boolean = false;
  getUserInfo: any;
  logedInUserData: any;
  isUserLogedIn: boolean = false;
  userData:any;
  search = "";
  arrayData:any=[];

cities = [
  'solapur',
  'pune',
  'latur',
  'baramati',
  'nashik',
  'aurangabad',
  'phaltan',
  'thane',
  'nagpur',
  'jaypur'
];


  constructor(private router: Router , private myservice :NewServiceService) {
    localStorage.setItem("name", this.name);
  }

  ngOnInit() {
    // this.getInfo();
    //  this.userData = JSON.parse(localStorage.getItem("user") || "");
     
    //  if(this.userData != null){
    //   this.isUserLogedIn = true;
    //  }else{
    //    this.isUserLogedIn = false;
    //  }
     

     this.fetchdata();
     
   }

  

  checkGivenText(value: any) {
    if (value == "1") {
      this.isItValid = true;
      console.log("Given value is correct");
    } else {
      this.isItValid = false;
      console.log("Given value is not correct")
    }


  }

  selectCity(city:any){
  console.log(city);

  }


  navigateToOtherPage() {
    localStorage.removeItem("surname");
    localStorage.setItem("name", this.name);

    this.router.navigate(["/about"]);

  }

  navigateToAboutPage() {
    localStorage.removeItem("name");

    localStorage.setItem("surname", this.surname);
    this.router.navigate(["/about"]);
  }


  submit(event: any) {
    console.log(event);
  }

  click(event: any) {
    console.log(event);
  }


  fetchdata(){
    this.myservice.getpracticedata().subscribe((data)=>{
     // console.log(data);
      this.arrayData = data;
      console.log(this.arrayData);
    })
  }

  students = [
    {
      name: "Gayatri",
      year: "2002",
      rollno: "47",
      address: "solapur"
    },
    {
      name: "yash",
      year: "2004",
      rollno: "11S",
      address: "latur"
    },
    {
      name: "priya",
      year: "2008",
      rollno: "37",
      address: "baramati"
    },
    {
      name: "sonu",
      year: "2012",
      rollno: "49",
      address: "thane"
    },
    {
      name: "monika",
      year: "2003",
      rollno: "41",
      address: "JuleSolapur"
    }

  ];


  
  logOut()
{
 localStorage.removeItem("user"); 
 this.router.navigate(["/login"]);
}
logIn(){
  this.router.navigate(["/login"]);
}

  // getInfo() {

  //   this.getUserInfo = JSON.parse(localStorage.getItem("detailInfo") || "");
  //   console.log(this.getUserInfo);
  // }

  backToPage() { 
    this.router.navigate(["/book"]);
  }

  
}


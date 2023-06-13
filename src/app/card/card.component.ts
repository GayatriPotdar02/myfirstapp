import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

 public selectedCompany!: string;

  constructor( private formBuilder: FormBuilder){

  }

  cards = [
    {

      id: "01",
      name:"Gayatri Potdar",
      job:"enggineer",
      phoneNo:"986456434",
      info:"Introducing yourself can be one of the interesting as well as the most tricky task in itself. my name is Gayatri Potdar. We all are unique and writing about ourselves is an essential aspect to discover our qualities more reliably. Discovering our qualities helps us a lot to know about ourselves.",
    },
    {

      id: "02",
      name:"Yash Potdar",
      job:"Doctor",
      phoneNo:"986456422",
      info:"My name is Yash and I hail from Gorakhpur. I come from a Hindu family and I am working as Senior doctor at pune. I am very well cared for and nurtured by my family. I studied at Delhi Public school and I am the apple of the eye for my parents.",
    },
    {

      id: "03",
      name:"Priya Potdar",
      job:"Painter",
      phoneNo:"986455434",
      info:"My father is a Government employee and my mother is a schoolteacher. I have one elder brother who studies in class Ninth. My brother and I go to the same school. He is very helpful and helps me with my studies."
    },
    {

      id: "04",
      name:"Sakshi Potdar",
      job:"Singer",
      phoneNo:"786456434",
      info:"I have a passion for singing. A lot of honours and awards have been bagged by me in singing competitions. Also, I have a passion for painting and loves to play with colours using my imagination."
    },
    {

      id: "05",
      name:"Purva Potdar",
      job:"Student",
      phoneNo:"986454434",
      info:"I am a very punctual and determined student. My teachers appreciate my work and motivate me to be better every day. I am an honest student and I always try to be consistent in my studies. As a child, I love going out and spending time with my family. When I grow up I want to explore and visit the whole world”."
    }
  ];
  

}

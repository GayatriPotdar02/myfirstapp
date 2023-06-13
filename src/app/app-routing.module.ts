import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlertComponent } from './alert/alert.component';
import { BookUSeatsComponent } from './book-useats/book-useats.component';
import { CardComponent } from './card/card.component';
import { DataComponent } from './data/data.component';
import { DetailIndoComponent } from './detail-indo/detail-indo.component';
import { FileComponent } from './file/file.component';
import { FormsComponent } from './forms/forms.component';
import { GayatriComponent } from './gayatri/gayatri.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PotdarComponent } from './potdar/potdar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent

  },
  {
    path:"about", component:AboutComponent

  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:"data", component:DataComponent
  },
 
  {
    path:"card", component:CardComponent
  },
  {
    path:"details", component:DetailIndoComponent
  },
  {
    path:"book" , component:BookUSeatsComponent
  },
  {
    path:"alert" , component:AlertComponent
  },
  {
    path:"form" , component:FormsComponent
  },{
  path:"register", component:RegisterComponent
  },{
    path:"login", component:LoginComponent
    },
    {
      path:"gayatri" , component:GayatriComponent
    },
    {
      path:"potdar" , component:PotdarComponent
    },
    {
      path:'file' , component:FileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JitEvaluator } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DetailIndoComponent } from './detail-indo/detail-indo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { BookUSeatsComponent } from './book-useats/book-useats.component';
import { AlertComponent } from './alert/alert.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsComponent } from './forms/forms.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GayatriComponent } from './gayatri/gayatri.component';
import { PotdarComponent } from './potdar/potdar.component';
import { FileComponent } from './file/file.component';
import { FiltercityPipe } from 'src/filtercity.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DataComponent,
    DetailIndoComponent,
    BookUSeatsComponent,
    AlertComponent,
    FormsComponent,
    RegisterComponent,
    LoginComponent,
    GayatriComponent,
    PotdarComponent,
    FileComponent,
    FiltercityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    ToastrModule.forRoot({
      timeOut: 15000
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


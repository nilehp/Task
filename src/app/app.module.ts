import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PillComponent } from './pill/pill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

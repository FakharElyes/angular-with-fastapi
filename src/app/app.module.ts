import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './shared/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { ShowUserComponent } from './users/show-user/show-user.component';

import { FormsModule } from '@angular/forms';
import { ShowOneUserComponent } from './users/show-one-user/show-one-user.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddEditUserComponent,
    ShowUserComponent,
    ShowOneUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { TaskAppComponent } from './task-app/task-app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { HeaderComponent } from './header/header.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListUsersComponent,
    TaskAppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    DeletetaskComponent,
    ListtaskComponent,
    HeaderComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

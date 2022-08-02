import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [{path: 'register',component:RegisterComponent},
{path: 'login' ,component:LoginComponent},
{path: 'listtask' ,component:ListtaskComponent},
{path: 'addtask' ,component:AddtaskComponent},
{path: 'view-user' , component:ViewUserComponent},
{path:'',redirectTo: 'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

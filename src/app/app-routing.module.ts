import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';


export const routes: Routes = [
  { path : '', component : CreateUserComponent},
  { path: 'create-user', component: CreateUserComponent },
  { path: 'list-user', component: ListUserComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

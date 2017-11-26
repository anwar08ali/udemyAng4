import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from '../components/error/error.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../_guards/index';
import { LoginComponent } from '../components/login/index';
import { RegisterComponent } from '../components/register/register.component';
import { UsersComponent } from '../components/users/users.component';
import { SingleUserComponent } from '../components/users/single-user/single-user.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
//import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], children:[
    { path: ':id', component: SingleUserComponent}
  ]},
  {path:'recipes', canActivate: [AuthGuard] , component: RecipesComponent},
  {path:'shopping-list', canActivate: [AuthGuard] , component: ShoppingListComponent},
  {path: 'not-found', component: ErrorComponent,data:{message: 'Page not Found!!!'}},
  {path: '**', redirectTo: '/not-found'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

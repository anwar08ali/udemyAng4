import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './components/login/index';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend } from '@angular/http/testing';
import { AlertComponent } from './_directives/index';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/users/single-user/single-user.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeService } from './_services/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    HeaderComponent,
    DropdownDirective,
    UsersComponent,
    SingleUserComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AlertService, 
    AuthenticationService, 
    UserService,
    RecipeService,
  // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }

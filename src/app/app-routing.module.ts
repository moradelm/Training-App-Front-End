// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';


// const routes: Routes = [

//   { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
//   { path: 'login', component: LoginComponent },
//   { path: 'registration', component: RegistrationComponent },
//   { path: 'nutrition-plan/:userId', component: NutritionPlanComponent },
//   { path: 'user-profile', component: UserProfileComponent },
  
//   // // { path: '', component: HomePageComponent },// Redirect to login by default
//   // { path: 'login', component: LoginComponent },
//   // { path: 'registration', component: RegistrationComponent },
//   // { path: 'nutrition-plan/:userId', component: NutritionPlanComponent }

//   // { path: '', component: HomePageComponent },
//   // { path: 'login', component: LoginComponent },
//   // { path: 'register', component: RegisterComponent },


// ];




// @NgModule({
//  imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home by default
  { path: 'home', component: HomePageComponent }, // Add this route for the home page
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'nutrition-plan/:userId', component: NutritionPlanComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


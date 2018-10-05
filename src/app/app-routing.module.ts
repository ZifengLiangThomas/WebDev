import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes} from '@angular/router';

export const routes: Routes = 
[{path: 'regis', component: RegistrationComponent},
{path: 'main', component: MainComponent},
{path: 'main/:accountName', component: MainComponent},
{path: 'auth', component: AuthComponent},
{path: 'login', component: LoginComponent},
{path: 'profile', component: ProfileComponent},
{path: '', redirectTo:'auth', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutngModule{}
export const routingComponents = [ProfileComponent, MainComponent, RegistrationComponent,LoginComponent, AuthComponent];
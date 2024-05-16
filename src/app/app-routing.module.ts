import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrimaryLayoutComponent } from './layout/primary-layout/primary-layout.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { CreationComponent } from './pages/creation/creation.component';
const routes: Routes = [
  {
    path: '',
    pathMatch:'prefix',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: HomeComponent,
      },
      {
        path: 'login',
        pathMatch:'full',
        component: AuthComponent
      },
      {
        path: 'user',
        pathMatch: 'full',
        component: ProfileComponent
      },
      {
        path: 'subjects',
        pathMatch: 'full',
        component: SubjectsComponent
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: CreationComponent
      }
      // {
      //   path: 'signup',
      //   pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrimaryLayoutComponent } from './layout/primary-layout/primary-layout.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { CreationComponent } from './pages/creation/creation.component';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MathComponent } from './pages/subjects/math/math.component';
import { EnglishComponent } from './pages/subjects/english/english.component';
import { ScienceComponent } from './pages/subjects/science/science.component';
import { HistoryComponent } from './pages/subjects/history/history.component';
const routes: Routes = [
  {
    path: '',
    pathMatch:'prefix',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: HomeComponent
      },
      {
        path: 'user',
        pathMatch: 'full',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'subjects',
        pathMatch: 'full',
        component: SubjectsComponent,
      },
        {
          path: 'subjects/Math',
          pathMatch:'full',
          component: MathComponent
        },
        {
          path: 'subjects/English',
          pathMatch:'full',
          component: EnglishComponent
        },
        {
          path: 'subjects/Science',
          pathMatch:'full',
          component: ScienceComponent
        },
        {
          path: 'subjects/History',
          pathMatch:'full',
          component: HistoryComponent
        },
      {
        path: 'create',
        pathMatch: 'full',
        component: CreationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'flashcards',
        pathMatch: 'full',
        component: ListCardsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

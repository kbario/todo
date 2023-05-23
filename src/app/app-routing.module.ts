import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { AccountComponent } from './account/account.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    component: HomeComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

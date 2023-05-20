import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

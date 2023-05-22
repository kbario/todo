import { Component, OnInit } from '@angular/core'
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from '../layout/layout.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, user } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [IonicModule, LayoutComponent,ReactiveFormsModule, CommonModule],
})
export class SignInComponent implements OnInit {
  ngOnInit() { }

  public readonly form = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  public showPassword = false;

  constructor(public auth: Auth , private routerService: Router) { }
  public async login(e: Event) {
    e.preventDefault();
    if (this.form.get("email")?.valid && this.form.get("password")?.valid) {
      const arst = await signInWithEmailAndPassword(
        this.auth,
        this.form.get("email")?.value!,
        this.form.get("password")?.value!
      );
      if (!!arst.user) {
        this.routerService.navigate([''])
      } else {

      }
    }
  }
  public logout() {
    this.auth.signOut();
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }

}

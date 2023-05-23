import { combineLatestWith, tap } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core'
import { Auth, user, User } from '@angular/fire/auth'
import { LayoutComponent } from '../layout/layout.component'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { updateProfile } from 'firebase/auth'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { CommonModule, NgIf } from '@angular/common'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [LayoutComponent, ReactiveFormsModule, IonicModule, CommonModule],
})
export class AccountComponent implements OnInit {
  public readonly user$: Observable<User | null>
  public readonly updateProfileSubject = new BehaviorSubject<any>(null)
  public readonly combinedStream$: Observable<unknown>

  public readonly form = new FormGroup({
    displayName: new FormControl<string>(''),
    photoURL: new FormControl<string>(''),
  })

  constructor(public auth: Auth) {
    console.log(auth)
    this.user$ = user(auth).pipe(
      tap((x) => {
        this.form.setValue({
          displayName: x?.displayName ?? '',
          photoURL: x?.photoURL ?? '',
        })
      })
    )

    this.combinedStream$ = this.updateProfileSubject.pipe(
      combineLatestWith(this.user$),
      tap((z) => console.log(z)),
      tap(([_, user]) => this._updateProfile(user))
    )
  }

  ngOnInit() {}

  public updateProfile() {
    this.updateProfileSubject.next({})
  }

  private _updateProfile(user: User | null) {
    if (!user) return
    const displayName = this.form.get('displayName')?.value
    const photoURL = this.form.get('photoURL')?.value
    if (!displayName && !photoURL) return
    updateProfile(user, {
      displayName,
      photoURL,
    })
  }
}

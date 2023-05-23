import { Observable, tap } from 'rxjs'

import { Auth, user } from '@angular/fire/auth'
import { User } from 'firebase/auth'

import { IonicModule } from '@ionic/angular'

import { CommonModule } from '@angular/common'
import { Component, signal } from '@angular/core'
import { RouterModule } from '@angular/router'

import { InitialsPipe } from './src/app/pipes/initials/initials.pipe'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, InitialsPipe],
})
export class AppComponent {
  public aboveLinks = [
    { title: 'todos', url: '/todos', icon: 'checkmark-circle' },
    //   { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    //   { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    //   { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    //   { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    //   { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    //   { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ]
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

  public user$: Observable<User | null>

  constructor(public auth: Auth) {
    this.user$ = user(auth).pipe(tap((x) => console.log(x)))
  }

  public arst = signal(0)
  public zxcd = () => this.arst.update((x) => x + 1)
}

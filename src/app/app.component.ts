import { Component } from '@angular/core'
import { FirebaseApp } from '@angular/fire/app'
import { Auth, user } from '@angular/fire/auth'
import { User } from 'firebase/auth'
import { Observable } from 'rxjs'
import { InitialsPipe } from './src/app/pipes/initials/initials.pipe'
import { RouterLinkActive, RouterLink } from '@angular/router'
import { NgIf, NgFor, AsyncPipe } from '@angular/common'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf,
    NgFor,
    RouterLinkActive,
    RouterLink,
    AsyncPipe,
    InitialsPipe,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ]
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

  public user$: Observable<User | null>

  constructor(public auth: Auth) {
    this.user$ = user(auth)
    // this.user = this.auth.user
  }
}

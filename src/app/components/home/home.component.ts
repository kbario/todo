import { Subject, Observable } from 'rxjs'
import { combineLatestWith, tap } from 'rxjs/operators'

import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Auth, User, user } from '@angular/fire/auth'
import {
  CollectionReference,
  collection,
  collectionData,
  Firestore,
  doc,
  updateDoc,
} from '@angular/fire/firestore'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { addDoc, deleteDoc } from 'firebase/firestore'
import { LayoutComponent } from 'src/app/layout/layout.component'
import { InitialsPipe } from 'src/app/src/app/pipes/initials/initials.pipe'

type Todo = {
  id?: string
  todo: string
  isDone: boolean
  user: {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    InitialsPipe,
    LayoutComponent,
  ],
})
export class HomeComponent implements OnInit {
  // item$: Observable<Item[]>;

  public readonly addDocSubject = new Subject<string>()

  private todosCollection: CollectionReference
  public todos$: Observable<Todo[]>
  public readonly user$: Observable<User | null>
  public readonly combined$: Observable<any>

  ngOnInit() {}
  constructor(private afs: Firestore, private auth: Auth) {
    this.user$ = user(auth)
    // .pipe(tap(x => console.log(x)))
    // console.log(this.afs)
    this.todosCollection = collection(this.afs, 'todos')
    this.todos$ = collectionData(this.todosCollection, {
      idField: 'id',
    }) as Observable<Todo[]>

    this.combined$ = this.addDocSubject.pipe(
      combineLatestWith(this.user$),
      tap(([x, user]) => this._addTodo(x, user))
    )
  }
  // openDialog(id: string | undefined): void {
  //   const arst = this.dialog.open(DeleteDialogComponent, {
  //     width: "250px",
  //   });
  //
  //   arst.afterClosed().subscribe((toDelete: boolean) => {
  //     if (toDelete) this.items$.doc(id).delete();
  //   });
  // }
  // public readonly todos$: Observable<unknown>;

  // public readonly todoSubject = new BehaviorSubject<string[]>([]);

  public deleteTodo({ id }: Todo): void {
    const dox = doc(this.afs, `todos/${id}`)
    deleteDoc(dox)
  }

  async toggleTodoStatus(todo: Todo) {
    const dox = doc(this.afs, `todos/${todo.id}`)
    await updateDoc(dox, { ...todo, isDone: !todo.isDone })
    // ({todo, isDone: !isDone})
  }

  public add(todo: string): void {
    if (todo === '' || todo === null || todo === undefined) return
    this.addDocSubject.next(todo)
  }

  private _addTodo(todo: string, user: User | null): void {
    addDoc(this.todosCollection, {
      todo,
      isDone: false,
      user: { name: user?.displayName, photo: user?.photoURL },
    } as Todo)
  }
}

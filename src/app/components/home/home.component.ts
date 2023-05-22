import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { Auth } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { InitialsPipe } from 'src/app/src/app/pipes/initials/initials.pipe';
import { Firestore, collectionData, collection, CollectionReference } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { addDoc, doc, updateDoc } from 'firebase/firestore';


type Todo = {
  id?: string;
  todo: string;
  isDone: boolean;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, InitialsPipe, LayoutComponent],
})
export class HomeComponent implements OnInit {
  // item$: Observable<Item[]>;

  private todosCollection: CollectionReference;
  public todos$: Observable<Todo[]>;

  ngOnInit() { }
  constructor(private afs: Firestore) {
    this.todosCollection = collection(this.afs, 'todos')
    this.todos$ = collectionData(this.todosCollection) as Observable<Todo[]>
    // this.todosCol = this.afs.collection<Todo>("/todos");
    // this.todos$ = this.todosCol.valueChanges({ idField: "id" });
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

  public readonly todoSubject = new BehaviorSubject<string[]>([]);

  public remove(todo: string): void {
    this.todoSubject.next(
      this.todoSubject.getValue().filter((x) => x !== todo)
    );
  }

  toggleTodoStatus(todo: Todo) {
    const dox = doc(this.afs, `todos/${todo.id}`)
    updateDoc(dox, { ...todo, isDone: !todo.isDone })
    // ({todo, isDone: !isDone})
  }
  //
  // public add(todo: string): void {
  //   if (todo === "" || todo === null || todo === undefined) return;
  //   this.todosCol.add({ todo, isDone: false });
  // }
}

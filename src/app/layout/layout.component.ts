import { Component, Input, OnInit } from '@angular/core'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LayoutComponent implements OnInit {
  @Input()
  header: string = ''

  constructor() {}

  ngOnInit() {}
}

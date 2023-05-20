import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InitialsPipe } from 'src/app/src/app/pipes/initials/initials.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, InitialsPipe],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

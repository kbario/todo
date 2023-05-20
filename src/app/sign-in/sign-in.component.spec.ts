import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { SignInComponent } from './sign-in.component'

describe('SignInComponent', () => {
  let component: SignInComponent
  let fixture: ComponentFixture<SignInComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), SignInComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SignInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import {
  SETTINGS as AUTH_SETTINGS,
  USE_DEVICE_LANGUAGE,
} from "@angular/fire/compat/auth";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyARhB-2y0A8--LfGjQQtGEM4c0yy50Udec",
  authDomain: "kb-todo-44b3b.firebaseapp.com",
  projectId: "kb-todo-44b3b",
  storageBucket: "kb-todo-44b3b.appspot.com",
  messagingSenderId: "977726981145",
  appId: "1:977726981145:web:baff9152412964f76b5688",
  measurementId: "G-LH1FS8FMXQ",
};

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ServiceWorkerModule } from '@angular/service-worker';
import { InitialsPipe } from './src/app/pipes/initials/initials.pipe';
import { SignInPipe } from './src/app/components/sign-in/sign-in.pipe';

@NgModule({
  declarations: [AppComponent, InitialsPipe, SignInPipe],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },
  {
    provide: AUTH_SETTINGS,
    useValue: { appVerificationDisabledForTesting: true },
  },
  { provide: USE_DEVICE_LANGUAGE, useValue: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


import { enableProdMode, isDevMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app/app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { SETTINGS as AUTH_SETTINGS, USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
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



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }), ReactiveFormsModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireModule, provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore()), provideAuth(() => getAuth())),
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
        {
            provide: AUTH_SETTINGS,
            useValue: { appVerificationDisabledForTesting: true },
        },
        { provide: USE_DEVICE_LANGUAGE, useValue: true },
        provideAnimations(),
    ]
})
  .catch(err => console.log(err));

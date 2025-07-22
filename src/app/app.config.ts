import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAnalytics } from "firebase/analytics";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()), provideFirebaseApp(() => initializeApp({"projectId":"join-81891","appId":"1:350101108590:web:dee14568b03bb1acb0337f","storageBucket":"join-81891.firebasestorage.app","apiKey":"AIzaSyBmCegF5K7-mqfAEurkeJASytOF5MwFcD0","authDomain":"join-81891.firebaseapp.com","messagingSenderId":"350101108590"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideAnimationsAsync()]
};
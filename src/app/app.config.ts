import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FelicitacionEvaComponent } from './felicitacion-eva/felicitacion-eva.component';

const routes: Routes = [{ path: '', component: FelicitacionEvaComponent }];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};

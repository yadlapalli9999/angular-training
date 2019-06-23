import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { CustomModule } from './CustomModule/custom-module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CustomModule)
  .catch(err => console.error(err));

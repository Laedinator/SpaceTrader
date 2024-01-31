import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/_configuration/app.config';
import { AppComponent } from './app/components/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

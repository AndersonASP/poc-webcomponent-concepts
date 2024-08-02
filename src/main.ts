import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { NewsComponent } from './app/news/news.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

(async () => {
  const app = await createApplication(appConfig);

  const newsComponent = createCustomElement(NewsComponent, {
    injector: app.injector,
  });

  customElements.define('my-news', newsComponent)
})();
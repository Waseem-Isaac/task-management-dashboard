import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';
import { baseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { provideQuillConfig } from 'ngx-quill/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor])),
    provideCharts(withDefaultRegisterables()),
    provideNativeDateAdapter(),
    {
      provide: MatDatepickerIntl,
      useFactory: () => {
        const intl = new MatDatepickerIntl();
        intl.prevMonthLabel = '';
        intl.nextMonthLabel = '';
        return intl;
      }
    },
    provideQuillConfig({
      modules: {
        // syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link']
        ]
      }
    })
  ],
};

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import { IgxDatePickerModule, IgxIconModule, IgxInputGroupModule, IgxTimePickerModule } from 'igniteui-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { createTranslateLoader } from '../app.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    // SecondComponent
  ],
  imports: [
    CommonModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    IgxIconModule,
    IgxInputGroupModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ]
})
export class SecondModuleModule { }

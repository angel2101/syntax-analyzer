import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegexComponent } from './components/regex/regex.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleCodeComponent } from './components/example-code/example-code.component';
import { InputCodeComponent } from './components/input-code/input-code.component';
import { TokensTableComponent } from './components/tokens-table/tokens-table.component';
import { ErrorsTableComponent } from './components/errors-table/errors-table.component';
import { DownloadTxtComponent } from './components/download-txt/download-txt.component';

@NgModule({
  declarations: [
    AppComponent,
    RegexComponent,
    HeaderComponent,
    FooterComponent,
    ExampleCodeComponent,
    InputCodeComponent,
    TokensTableComponent,
    ErrorsTableComponent,
    DownloadTxtComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

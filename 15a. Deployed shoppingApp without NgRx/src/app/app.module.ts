import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { ShortenPipe } from './shorten.pipe';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShortenPipe,
    ReversePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,//import all Modules
    SharedModule,  // import all common Module
    CoreModule,  // import all services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

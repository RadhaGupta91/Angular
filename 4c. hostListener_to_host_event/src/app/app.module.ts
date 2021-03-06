import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {basicHighLightDirective} from './basic-highlight/basic-highlight.directive';
import {betterHighLightDirective} from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighLightDirective,
    betterHighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

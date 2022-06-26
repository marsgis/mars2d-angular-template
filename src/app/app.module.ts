import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mars2dDirective } from './mars2d.directive';

@NgModule({
  declarations: [
    AppComponent,
    Mars2dDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VTERiskComponent } from './components/vterisk/vterisk.component';

@NgModule({
  declarations: [
    AppComponent,
    VTERiskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

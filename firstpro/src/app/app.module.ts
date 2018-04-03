import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TictactoyComponent } from './components/tictactoy/tictactoy.component';


@NgModule({
  declarations: [
    AppComponent,
    TictactoyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

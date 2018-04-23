import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { HttpService } from './services/http.service';
import { QueriesService } from './services/queries.service';

// Componenets
import { AppComponent } from './app.component';
import { PostsComponent } from './componenets/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, QueriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

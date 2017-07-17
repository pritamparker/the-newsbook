import { Http, HttpModule } from '@angular/http';
import { NewsService } from './body/news.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LeftPanelComponent } from './body/left-panel/left-panel.component';
import { AboutComponent } from './body/data-panel/about/about.component';
import { DataPanelComponent } from './body/data-panel/data-panel.component';
import { NewsDataComponent } from './body/data-panel/news-data/news-data.component';
import { HomeDataComponent } from './body/data-panel/home-data/home-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LeftPanelComponent,
    AboutComponent,
    DataPanelComponent,
    NewsDataComponent,
    HomeDataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { WhoComponent } from './components/who/who.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NguCarouselModule } from '@ngu/carousel';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    WhoComponent,
    SkillsComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    PageHomeComponent
  ],
  imports: [
    NguCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

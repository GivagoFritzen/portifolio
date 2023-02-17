import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { WhoComponent } from './who/who.component';
import { SkillsComponent } from './skills/skills.component';
import { NguCarouselModule } from '@ngu/carousel';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    WhoComponent,
    SkillsComponent,
    HeaderComponent,
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

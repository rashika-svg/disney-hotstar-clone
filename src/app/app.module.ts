import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingPageComponent } from './modules/onboarding-page/onboarding-page.component';
import { DisneyLogoComponent } from './common/disney-logo/disney-logo.component';
import { HomeComponent } from './modules/home/home.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MovieGridComponent } from './modules/movie-grid/movie-grid.component';
import { MovieCarouselComponent } from './modules/movie-carousel/movie-carousel.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingPageComponent,
    DisneyLogoComponent,
    HomeComponent,
    SideNavComponent,
    MovieGridComponent,
    MovieCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

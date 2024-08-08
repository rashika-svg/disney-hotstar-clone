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
import { MovieCarouselComponent } from './modules/movie-carousel/movie-carousel.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingPageComponent,
    DisneyLogoComponent,
    HomeComponent,
    SideNavComponent,
    MovieCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTooltipModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

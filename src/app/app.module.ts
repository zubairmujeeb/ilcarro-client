import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { LatestFeedsComponent } from './latest-feeds/latest-feeds.component';
import { FindCarComponent } from './find-car/find-car.component';
import { FindCarResultComponent } from './find-car-result/find-car-result.component';
import { AuthInterceptor } from './auth-interceptor';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    PromoBannerComponent,
    MostPopularComponent,
    LatestFeedsComponent,
    FindCarComponent,
    FindCarResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

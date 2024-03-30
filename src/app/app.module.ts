import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsComponent } from './components/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersdataService } from 'src/shared/services/usersdata.service';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPipe } from './pipe/search.pipe';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { NotfoundComponent } from './components/notfound/notfound.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    FooterComponent,
    DetailsComponent,
    HomeComponent,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NotfoundComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

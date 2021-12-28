import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaVideoPanelModule } from 'projects/agencycoda/mia-video-panel/src/public-api';
import { MIA_CORE_PROVIDER, MIA_GOOGLE_STORAGE_PROVIDER } from '@agencycoda/mia-core';
import { MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MiaVideoPanelModule
  ],
  providers: [
    { 
      provide: MIA_CORE_PROVIDER, 
      useValue: {
        baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
        //baseUrl: 'http://0.0.0.0:8080/'
      }
    },
    { 
      provide: MIA_AUTH_PROVIDER, 
      useValue: {
        baseUrl: 'https://iron-radio-322514.uc.r.appspot.com/'
        //baseUrl: 'http://0.0.0.0:8080/'
      }
    },
    {
      provide: MIA_GOOGLE_STORAGE_PROVIDER,
      useValue: {
        bucket: 'iba-files'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

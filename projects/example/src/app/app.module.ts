import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaVideoPanelModule } from 'projects/agencycoda/mia-video-panel/src/public-api';
import { MIA_CORE_PROVIDER } from '@agencycoda/mia-core';

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
        baseUrl: 'http://0.0.0.0:8080/'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

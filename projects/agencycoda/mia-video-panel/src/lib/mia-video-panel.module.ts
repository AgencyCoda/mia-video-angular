import { NgModule } from '@angular/core';

// Agency Coda Libraries
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';
import { MiaTableModule } from '@agencycoda/mia-table';
import { MiaLayoutModule } from '@agencycoda/mia-layout';

// Components
import { VideoListComponent } from './pages/video-list/video-list.component';


@NgModule({
  declarations: [
    VideoListComponent
  ],
  imports: [
    MiaCoreModule,
    MiaTableModule,
    MiaFormModule,
    MiaLayoutModule
  ],
  exports: [
    VideoListComponent
  ]
})
export class MiaVideoPanelModule { }

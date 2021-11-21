import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from 'projects/agencycoda/mia-video-panel/src/lib/pages/video-list/video-list.component';

const routes: Routes = [
  { path: 'lista', component: VideoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Inject, Injectable } from '@angular/core';
import { MiaVideo } from '../entities/mia_video';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiaVideoService extends MiaBaseCrudHttpService<MiaVideo> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) public config: MiaCoreConfig,
    protected http: HttpClient,

  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-video';
  }
 
}
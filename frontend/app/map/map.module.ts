import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';

import {MapComponent} from './map.component';
import {AgmDirectionModule} from 'agm-direction';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8L2qZEB_6c7otmjycUvDgJZG-vNBygXs'
    }),
    AgmDirectionModule,
    CommonModule
  ],
  providers: [
  ]
})
export class MapModule {
}

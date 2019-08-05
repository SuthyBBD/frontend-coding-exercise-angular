import {Component, Input, OnInit} from '@angular/core';
import {LocationCoordinates} from '../shared/model/LocationCoordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() currentLocation: LocationCoordinates;
  @Input() deliveryLocation: LocationCoordinates;
  @Input() vendorLocation: LocationCoordinates;
  @Input() deliveredAt: string;

  constructor() {
  }

  ngOnInit() {
  }
}

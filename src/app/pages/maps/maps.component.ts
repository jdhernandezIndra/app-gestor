import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  center = {lat: 24, lng: 12};
  zoom = 5;
  display?: google.maps.LatLngLiteral;
}

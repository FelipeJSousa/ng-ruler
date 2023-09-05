import { Component } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.scss']
})
export class RulerComponent {

  rulerProps = {
    markers : [
      'P0',
      'P45',
      'P55',
      'P80',
      'P100',
    ],
    specialityPosition: 'P100',
    currentPosition: 'P40'
  }

  getMarkerPosition(marker: string) {
    return Number(marker.replace('P', ''));
  }

}

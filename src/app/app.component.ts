import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tapRoom';

  kegs: Keg[] = [
    new Keg('lager A', 'someBrand', 100, 5, 6.5, 124),
    new Keg('lager B', 'someOtherBrand', 112, 4, 9.0, 124),
    new Keg('lager C', 'someBrandFrom Over there', 105, 6, 4.5, 124),
  ]

}

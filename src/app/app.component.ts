import { Component, VERSION } from '@angular/core';
import { CapitalizadoPipe } from './capitalizado.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'mauel aLEJANDRO flores ramirez';
}

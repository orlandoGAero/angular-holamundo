import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number;
  nombre: string;

  constructor() {
    this.anio = new Date().getFullYear() + 1;
    this.nombre = 'Orlando Reyes';
  }

}

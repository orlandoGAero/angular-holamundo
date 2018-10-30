import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;
    frase: any = {
        mensaje: 'Angular es una maravilla',
        autor: 'Anomino'
    };
    personajes: string[] = [
        'Bruja Escarlata',
        'Capitan America',
        'Hulk',
        'Pantera Negra'];
}

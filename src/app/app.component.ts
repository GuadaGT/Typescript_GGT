import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typescript_GGT';
  mostrarTexto = true;
  constructor()
  {

  }
  ocultarTexto() {
    this.mostrarTexto = false;
  }
}








import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typescript_GGT';
  img = '../assets/Images/Inicio.jpg';
  winround = 'Empieza el juego';
  cpu = 0;
  puntosCpu = 0;
  barraCpu = 0;
  puntosJugador = 0;
  barraJugador = 0;
  btncpu = [
    "btn btn-outline-info",
    "btn btn-outline-info",
    "btn btn-outline-info",
    "btn btn-outline-info",
    "btn btn-outline-info",
    "btn btn-outline-info",
  ];
  btnj = '';
  btnjugador: any;


  constructor() {
  }

  InicioJuego(jugador: number) {
    this.cpu = Math.floor(Math.random() * 5);
    this.colorBotones(this.cpu)
    {
      switch (this.cpu) {
        case 0:
          if (jugador == 0) {
            this.empate();
          } else if (jugador == 1) {
            this.ganaJugador();
          } else if (jugador == 2) {
            this.ganaCpu();
          } else if (jugador == 3) {
            this.ganaCpu();
          } else if (jugador == 4) {
            this.ganaJugador();
          }
          break;
        case 1:
          if (jugador == 1) {
            this.empate();
          } else if (jugador == 0) {
            this.ganaCpu();
          } else if (jugador == 2) {
            this.ganaJugador();
          } else if (jugador == 3) {
            this.ganaJugador();
          } else if (jugador == 4) {
            this.ganaCpu();
          }
          break;
        case 2:
          if (jugador == 2) {
            this.empate();
          } else if (jugador == 0) {
            this.ganaJugador();
          } else if (jugador == 1) {
            this.ganaCpu();
          } else if (jugador == 3) {
            this.ganaCpu();
          } else if (jugador == 4) {
            this.ganaJugador();
          }
          break;
        case 3:
          if (jugador == 3) {
            this.empate();
          } else if (jugador == 0) {
            this.ganaJugador();
          } else if (jugador == 1) {
            this.ganaCpu();
          } else if (jugador == 2) {
            this.ganaJugador();
          } else if (jugador == 4) {
            this.ganaCpu();
          }
          break;
        case 4:
          if (jugador == 4) {
            this.empate();
          } else if (jugador == 0) {
            this.ganaCpu();
          } else if (jugador == 1) {
            this.ganaJugador();
          } else if (jugador == 2) {
            this.ganaCpu();
          } else if (jugador == 3) {
            this.ganaJugador();
          }
          break;
      }
    }

    if (this.cpu == 5)
    {
      this.btnj = 'disabled';
    }
  }

  public colorBotones(cpu: number){

  }

  public ganaCpu() {
    this.winround = "Gana CPU";
    this.puntosCpu++;
    this.barraCpu = this.barraCpu + 20;
  }

  public ganaJugador() {
    this.winround = "Gana Jugador";
    this.puntosJugador++;
    this.barraJugador = this.barraJugador + 20;
  }

  public empate() {
    this.winround = "Empate";
    this.img = '';
  }
}

<!-- CSS only -->






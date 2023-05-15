import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
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


  constructor(private router:Router)
  {
    this.colorBotones(this.cpu);
  }
  colorBotones(cpu: number, generarNuevo = false){
    let cpuBtnIndex = cpu;
    let cpuBtnClassIndex = Math.floor(Math.random() * 5);

    // Restaurar los colores originales antes de actualizar el color del botón aleatorio
    for (let i = 0; i < this.btncpu.length; i++) {
      this.btncpu[i] = this.btncpu[i].replace("btn-dark", "btn-outline-info");
    }

    // Actualizar el color del botón aleatorio
    this.btncpu[cpuBtnIndex] = this.btncpu[cpuBtnClassIndex];
    this.btncpu[cpuBtnIndex] = "btn btn-dark";

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
    if (jugador >= 0 && jugador <= 4) {
      setTimeout(() => {
        this.colorBotones(this.cpu);
      }, 0);
    }
  }

  public ganaCpu() {
    this.puntosCpu++;
    this.barraCpu = this.barraCpu += 20;
    if(this.puntosCpu == 5)
    {
      this.router.navigate(['/ganaCpu']);
    }
  }

  public ganaJugador() {
    this.puntosJugador++;
    this.barraJugador = this.barraJugador += 20;
    if(this.puntosJugador == 5)
    {
      this.router.navigate(['/ganaHumano']);
    }
  }

  public empate() {
    this.img = '';
    if(this.puntosJugador == 5 && this.puntosCpu == 5)
    {
      this.router.navigate(['/empate']);
    }
  }
}

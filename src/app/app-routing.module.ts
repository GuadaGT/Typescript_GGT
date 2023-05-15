import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JuegoComponent} from "./juego/juego.component";
import {InicioComponent} from "./inicio/inicio.component";
import {GanaCpuComponent} from "./gana-cpu/gana-cpu.component";
import {GanaHumanoComponent} from "./gana-humano/gana-humano.component";
import {EmpateComponent} from "./empate/empate.component";

const routes: Routes = [
  {path: 'juego', component: JuegoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'ganaCpu', component: GanaCpuComponent},
  {path: 'ganaHumano', component: GanaHumanoComponent},
  {path: 'empate', component: EmpateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

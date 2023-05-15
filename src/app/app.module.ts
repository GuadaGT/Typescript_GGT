import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { InicioComponent } from './inicio/inicio.component';
import { GanaCpuComponent } from './gana-cpu/gana-cpu.component';
import { GanaHumanoComponent } from './gana-humano/gana-humano.component';
import { EmpateComponent } from './empate/empate.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    InicioComponent,
    GanaCpuComponent,
    GanaHumanoComponent,
    EmpateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

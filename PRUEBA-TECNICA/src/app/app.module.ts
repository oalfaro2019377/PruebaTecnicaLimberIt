import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CorsInterceptor } from './cors.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { ModificarRegionComponent } from './components/modificar-region/modificar-region.component';
import { ModificarSupervisorComponent } from './components/modificar-supervisor/modificar-supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdministradorComponent,
    SupervisorComponent,
    VendedorComponent,
    VentasComponent,
    RegionesComponent,
    ModificarRegionComponent,
    ModificarSupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {  
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

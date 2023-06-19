import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { ModificarRegionComponent } from './components/modificar-region/modificar-region.component';
import { ModificarSupervisorComponent } from './components/modificar-supervisor/modificar-supervisor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Admin', component: AdministradorComponent},
  {path: 'Supervisor', component: SupervisorComponent},
  {path: 'Vendedor', component: VendedorComponent},
  {path: 'Ventas', component: VentasComponent},
  {path: 'Regiones', component: RegionesComponent},
  {path: 'ModificarRegion/:id', component: ModificarRegionComponent},
  {path: 'ModificarSupervisor/:id', component: ModificarSupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

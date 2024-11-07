import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarCategoriasComponent } from './components/listar-categorias/listar-categorias.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { RegistrarEntradaComponent } from './components/registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './components/registrar-salida/registrar-salida.component';
import { FechaEntradasComponent } from './components/fecha-entradas/fecha-entradas.component';
import { FechaSalidasComponent } from './components/fecha-salidas/fecha-salidas.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar-productos', pathMatch: 'full' }, // Redirige a listar-productos
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'listar-categorias', component: ListarCategoriasComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'registrar-entrada', component: RegistrarEntradaComponent },
  { path: 'registrar-salida', component: RegistrarSalidaComponent },
  { path: 'fecha-entradas', component: FechaEntradasComponent },
  { path: 'fecha-salidas', component: FechaSalidasComponent },
  { path: '**', redirectTo: '/listar-productos' } // Manejo de rutas desconocidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

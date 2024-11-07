import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarCategoriasComponent } from './components/listar-categorias/listar-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { ProductosPorCategoriaComponent } from './components/productos-por-categoria/productos-por-categoria.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarEntradaComponent } from './components/registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './components/registrar-salida/registrar-salida.component';
import { FechaEntradasComponent } from './components/fecha-entradas/fecha-entradas.component';
import { FechaSalidasComponent } from './components/fecha-salidas/fecha-salidas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    ListarCategoriasComponent,
    CrearProductosComponent,
    ProductosPorCategoriaComponent,
    RegistrarEntradaComponent,
    RegistrarSalidaComponent,
    FechaEntradasComponent,
    FechaSalidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

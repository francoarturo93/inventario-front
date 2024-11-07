import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario/inventario.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit{

  productos: any[] = [];

  page = 0;
  size = 5;
  error: string = '';

  constructor(private inventarioService: InventarioService){}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.inventarioService.pageProductos(this.page, this.size)
      .subscribe({
        next: data => {
          this.productos = data.content;
        },
        error: error => {
          this.error = 'Error al conectar con la API';
          console.error('API error:', error); // Esto te ayudará a depurar
        }
      }
      );
  }

  siguientePagina(): void {
    this.page++;
    this.cargarProductos();
  }

  anteriorPagina(): void {
    if (this.page > 0) {
      this.page--;
      this.cargarProductos();
    }
  }

}

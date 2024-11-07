import { Component, OnInit } from '@angular/core';
import { ProductoEntradaDTO } from 'src/app/models/models';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.scss']
})
export class RegistrarEntradaComponent implements OnInit{

  productoEntrada: ProductoEntradaDTO = {
    productoId: 0,
    entradas: 0
  };
  mensaje: string = '';

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.agregarEntradas();
  }

  agregarEntradas() {
    if (this.productoEntrada.productoId > 0 && this.productoEntrada.entradas > 0) {
      this.inventarioService.agregarEntradas(this.productoEntrada).subscribe({
        next: (response) => {
          console.log('Producto entrada enviado', response);
        },
        error: (error) => {
          console.error('Error al crear el producto:', error);
        },
        complete: () => {
          console.log('Proceso de creación completado.');
        }
      });
    } else {
      this.mensaje = 'Ingrese un ID de producto y número de entradas válido';
    }
  }

}

import { Component } from '@angular/core';
import { ProductoSalidaDTO } from 'src/app/models/models';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.scss']
})
export class RegistrarSalidaComponent {
  productoSalida: ProductoSalidaDTO = {
    productoId: 0,
    salidas: 0
  };
  mensaje: string = '';

  constructor(private inventarioService: InventarioService) { }

  registrarSalidas() {
    if (this.productoSalida.productoId > 0 && this.productoSalida.salidas > 0) {
      this.inventarioService.registrarSalidas(this.productoSalida).subscribe({
        next: (response) => {
          console.log('Producto Salida enviado', response);
        },
        error: (error) => {
          console.error('Error al crear el producto:', error);
        },
        complete: () => {
          console.log('Proceso de creación completado.');
        }
      });
    } else {
      this.mensaje = 'Ingrese un ID de producto y número de salidas válido';
    }
  }
}

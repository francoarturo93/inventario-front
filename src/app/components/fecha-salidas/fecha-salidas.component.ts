import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-fecha-salidas',
  templateUrl: './fecha-salidas.component.html',
  styleUrls: ['./fecha-salidas.component.scss']
})
export class FechaSalidasComponent {
  fechaForm: FormGroup;

    // Para almacenar los resultados de la búsqueda
  salidas: any[] = [];

  constructor(private inventarioService: InventarioService) {
     // Inicializar el formulario con el campo de la fecha
     this.fechaForm = new FormGroup({
       fecha: new FormControl('') // Inicializa el campo vacío
     });
  }

  buscarSalidasPorFecha() {
    const fecha = this.fechaForm.get('fecha')?.value;
    const fechaFormateada = formatDate(fecha, 'dd-MM-yy', 'en-US');

    this.inventarioService.buscarSalidasPorFecha(fechaFormateada).subscribe({
      next: (response) => {
        this.salidas = response;
        console.log("Fecha encontrada!",this.salidas);
      },
      error: (error) => {
        console.error('Error al buscar la fecha actual:', error);
      },
      complete: () => {
        console.log('Proceso de creación completado.');
      }

    })
  }

}

import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-fecha-entradas',
  templateUrl: './fecha-entradas.component.html',
  styleUrls: ['./fecha-entradas.component.scss']
})
export class FechaEntradasComponent implements OnInit{
   // Formulario para capturar la fecha
   fechaForm: FormGroup;

   // Para almacenar los resultados de la búsqueda
   entradas: any[] = [];

   constructor(private inventarioService: InventarioService) {
     // Inicializar el formulario con el campo de la fecha
     this.fechaForm = new FormGroup({
       fecha: new FormControl('') // Inicializa el campo vacío
     });
   }
  ngOnInit(): void {
    this.buscarEntradasPorFecha();
  }

   // Función para buscar las entradas por fecha
    buscarEntradasPorFecha() {
      const fecha = this.fechaForm.get('fecha')?.value;

      if (!fecha || fecha.trim() === '') {
        console.error('Fecha no válida');
        return;
      }
     // Formatear la fecha en "dd-MM-yy" (que espera el backend)
      const fechaFormateada = formatDate(fecha, 'dd-MM-yy', 'en-US');

      console.log(fechaFormateada);


     // Hacer la solicitud HTTP al backend
      this.inventarioService.buscarEntradasPorFecha(fechaFormateada).subscribe({
        next: (response) => {
          this.entradas = response;
          console.log("Fecha encontrada!",this.entradas);
        },
        error: (error) => {
          console.error('Error al buscar la fecha actual:', error);
        },
        complete: () => {
          console.log('Proceso de creación completado.');
        }
      });
    }
}

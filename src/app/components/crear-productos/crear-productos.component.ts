import { Component, OnInit } from '@angular/core';
import { Producto, Categoria } from '../../models/models';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.scss']
})
export class CrearProductosComponent implements OnInit{

  productoForm!: FormGroup;
  categorias: Categoria[] = [];

  constructor(private fb: FormBuilder, private inventarioService: InventarioService) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      entradas: ['', Validators.required],
      categoria: ['', Validators.required] // Control para el id de la categoría
    });
  }

  // ngOnInit() llama a cargarCategorias() para asegurarte de que las categorías estén disponibles cuando el componente se muestre por primera vez.
  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.inventarioService.obtenerCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  crearProducto(): void {
    if (this.productoForm.valid) {

      const productoData: Producto = {
        nombre: this.productoForm.value.nombre,
        precio: this.productoForm.value.precio,
        entradas: this.productoForm.value.entradas,
        categoria: {id: this.productoForm.value.categoria}

      };
      console.log(productoData);
      console.log(this.categorias);

      // Enviar la solicitud al backend
      this.inventarioService.crearProducto(productoData).subscribe({
        next: (productoCreado) => {
          console.log('Producto creado', productoCreado);
        },
        error: (error) => {
          console.error('Error al crear el producto:', error);
        },
        complete: () => {
          console.log('Proceso de creación completado.');
        }
      });


    } else {
      console.log('Formulario no válido');
    }
  }
}

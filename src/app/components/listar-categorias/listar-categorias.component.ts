import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit{

  categorias: any[] = [];
  page = 0;
  size = 3;
  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }
  listarCategorias(): void{
    this.inventarioService.pageCategorias(this.page, this.size)
      .subscribe({
        next: data => {
          this.categorias = data.content;
        }
      })
  }
  siguientePagina(): void {
    this.page++;
    this.listarCategorias();
  }

  anteriorPagina(): void {
    if (this.page > 0) {
      this.page--;
      this.listarCategorias();
    }
  }
}

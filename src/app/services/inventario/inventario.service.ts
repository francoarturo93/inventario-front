import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto, Categoria, ProductoEntradaDTO, ProductoSalidaDTO } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiUrl = "http://localhost:8080/api/inventario";

  constructor(private http: HttpClient) { }

  /* PAGES */
  pageProductos(page: number, size: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/pageproductos?page=${page}&size=${size}`);
  }

  pageCategorias(page: number, size: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pagecategorias?page=${page}&size=${size}`);
  }

  /* LIST
      Método para obtener las categorías desde el backend
  */
  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/listcategorias`);
  }
  buscarEntradasPorFecha(fecha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buscarEntradasPorFecha?fecha=${fecha}`);
  }
  buscarSalidasPorFecha(fecha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buscarSalidasPorFecha?fecha=${fecha}`);
  }
  /* *Crear Producto
       Método para crear un producto en el backend
  */
  crearProducto(producto: Producto): Observable<Producto> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Producto>(`${this.apiUrl}/crearproductos`, producto);
  }

  /* *Control de Stock  */
  agregarEntradas(productoEntrada: ProductoEntradaDTO): Observable<ProductoEntradaDTO>{
    return this.http.post<ProductoEntradaDTO>(`${this.apiUrl}/entradas`, productoEntrada);
  }

  registrarSalidas(productoSalida: ProductoSalidaDTO): Observable<ProductoSalidaDTO>{
    return this.http.post<ProductoSalidaDTO>(`${this.apiUrl}/salidas`, productoSalida);
  }

}

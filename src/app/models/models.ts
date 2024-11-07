export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  entradas: number;
  categoria: Categoria;
  salidas?: number;
  stock?: number;
}

export interface Categoria {
  id?: number;
  nombre?: string;
}

export interface ProductoEntradaDTO {
  productoId: number;
  entradas: number;
}

export interface ProductoSalidaDTO {
  productoId: number;
  salidas: number;
}

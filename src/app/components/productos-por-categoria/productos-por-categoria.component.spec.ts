import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorCategoriaComponent } from './productos-por-categoria.component';

describe('ProductosPorCategoriaComponent', () => {
  let component: ProductosPorCategoriaComponent;
  let fixture: ComponentFixture<ProductosPorCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosPorCategoriaComponent]
    });
    fixture = TestBed.createComponent(ProductosPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

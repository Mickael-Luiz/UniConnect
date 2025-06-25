import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPagamentosComponent } from './grafico-pagamentos.component';

describe('GraficoPagamentosComponent', () => {
  let component: GraficoPagamentosComponent;
  let fixture: ComponentFixture<GraficoPagamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoPagamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

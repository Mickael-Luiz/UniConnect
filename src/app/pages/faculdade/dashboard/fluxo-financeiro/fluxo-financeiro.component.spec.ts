import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoFinanceiroComponent } from './fluxo-financeiro.component';

describe('FluxoFinanceiroComponent', () => {
  let component: FluxoFinanceiroComponent;
  let fixture: ComponentFixture<FluxoFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluxoFinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

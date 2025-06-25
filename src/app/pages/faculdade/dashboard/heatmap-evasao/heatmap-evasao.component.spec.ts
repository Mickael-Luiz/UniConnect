import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapEvasaoComponent } from './heatmap-evasao.component';

describe('HeatmapEvasaoComponent', () => {
  let component: HeatmapEvasaoComponent;
  let fixture: ComponentFixture<HeatmapEvasaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapEvasaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapEvasaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFaculdadeComponent } from './registro-faculdade.component';

describe('RegistroFaculdadeComponent', () => {
  let component: RegistroFaculdadeComponent;
  let fixture: ComponentFixture<RegistroFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroFaculdadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

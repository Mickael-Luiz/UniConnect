import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBasicaComponent } from './info-basica.component';

describe('InfoBasicaComponent', () => {
  let component: InfoBasicaComponent;
  let fixture: ComponentFixture<InfoBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBasicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

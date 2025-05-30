import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarComponent } from './leftbar.component';

describe('LeftbarComponent', () => {
  let component: LeftbarComponent;
  let fixture: ComponentFixture<LeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbarsComponent } from './rightbars.component';

describe('RightbarsComponent', () => {
  let component: RightbarsComponent;
  let fixture: ComponentFixture<RightbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightbarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

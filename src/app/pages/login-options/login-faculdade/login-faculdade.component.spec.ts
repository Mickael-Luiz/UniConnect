import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFaculdadeComponent } from './login-faculdade.component';

describe('LoginFaculdadeComponent', () => {
  let component: LoginFaculdadeComponent;
  let fixture: ComponentFixture<LoginFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFaculdadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

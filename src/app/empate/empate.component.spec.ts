import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpateComponent } from './empate.component';

describe('EmpateComponent', () => {
  let component: EmpateComponent;
  let fixture: ComponentFixture<EmpateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpateComponent]
    });
    fixture = TestBed.createComponent(EmpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

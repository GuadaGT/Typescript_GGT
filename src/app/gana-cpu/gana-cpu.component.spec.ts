import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaCpuComponent } from './gana-cpu.component';

describe('GanaCpuComponent', () => {
  let component: GanaCpuComponent;
  let fixture: ComponentFixture<GanaCpuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanaCpuComponent]
    });
    fixture = TestBed.createComponent(GanaCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaHumanoComponent } from './gana-humano.component';

describe('GanaHumanoComponent', () => {
  let component: GanaHumanoComponent;
  let fixture: ComponentFixture<GanaHumanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanaHumanoComponent]
    });
    fixture = TestBed.createComponent(GanaHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

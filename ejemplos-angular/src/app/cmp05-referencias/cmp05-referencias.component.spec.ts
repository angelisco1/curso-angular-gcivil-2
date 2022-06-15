import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05ReferenciasComponent } from './cmp05-referencias.component';

describe('Cmp05ReferenciasComponent', () => {
  let component: Cmp05ReferenciasComponent;
  let fixture: ComponentFixture<Cmp05ReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp05ReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp05ReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

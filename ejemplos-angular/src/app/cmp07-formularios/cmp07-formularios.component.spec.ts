import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07FormulariosComponent } from './cmp07-formularios.component';

describe('Cmp07FormulariosComponent', () => {
  let component: Cmp07FormulariosComponent;
  let fixture: ComponentFixture<Cmp07FormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp07FormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp07FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

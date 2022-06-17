import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMemeComponent } from './form-meme.component';

describe('FormMemeComponent', () => {
  let component: FormMemeComponent;
  let fixture: ComponentFixture<FormMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

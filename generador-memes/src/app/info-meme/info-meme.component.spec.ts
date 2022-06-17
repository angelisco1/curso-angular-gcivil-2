import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMemeComponent } from './info-meme.component';

describe('InfoMemeComponent', () => {
  let component: InfoMemeComponent;
  let fixture: ComponentFixture<InfoMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

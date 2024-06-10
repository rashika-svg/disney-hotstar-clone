import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyLogoComponent } from './disney-logo.component';

describe('DisneyLogoComponent', () => {
  let component: DisneyLogoComponent;
  let fixture: ComponentFixture<DisneyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisneyLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

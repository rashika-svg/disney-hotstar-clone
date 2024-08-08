import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10inIndiaComponent } from './top10in-india.component';

describe('Top10inIndiaComponent', () => {
  let component: Top10inIndiaComponent;
  let fixture: ComponentFixture<Top10inIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10inIndiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10inIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

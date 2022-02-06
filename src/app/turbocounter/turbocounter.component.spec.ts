import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboCounterComponent } from './turbocounter.component';

describe('TurboCounterComponent', () => {
  let component: TurboCounterComponent;
  let fixture: ComponentFixture<TurboCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurboCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurboCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

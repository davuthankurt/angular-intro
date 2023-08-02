import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShibesComponent } from './shibes.component';

describe('ShibesComponent', () => {
  let component: ShibesComponent;
  let fixture: ComponentFixture<ShibesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShibesComponent]
    });
    fixture = TestBed.createComponent(ShibesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenItemComponent } from './men-item.component';

describe('MenItemComponent', () => {
  let component: MenItemComponent;
  let fixture: ComponentFixture<MenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

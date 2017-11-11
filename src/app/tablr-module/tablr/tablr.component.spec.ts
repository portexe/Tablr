import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablrComponent } from './tablr.component';

describe('TablrComponent', () => {
  let component: TablrComponent;
  let fixture: ComponentFixture<TablrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablrColumnComponent } from './tablr-column.component';

describe('TablrColumnComponent', () => {
  let component: TablrColumnComponent;
  let fixture: ComponentFixture<TablrColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablrColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablrColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotBomComponent } from './lot-bom.component';

describe('LotBomComponent', () => {
  let component: LotBomComponent;
  let fixture: ComponentFixture<LotBomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotBomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

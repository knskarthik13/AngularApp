import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeidlistComponent } from './fakeidlist.component';

describe('FakeidlistComponent', () => {
  let component: FakeidlistComponent;
  let fixture: ComponentFixture<FakeidlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeidlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

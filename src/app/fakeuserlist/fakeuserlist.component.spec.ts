import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeuserlistComponent } from './fakeuserlist.component';

describe('FakeuserlistComponent', () => {
  let component: FakeuserlistComponent;
  let fixture: ComponentFixture<FakeuserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeuserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

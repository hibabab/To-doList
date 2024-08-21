import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTachComponent } from './add-tach.component';

describe('AddTachComponent', () => {
  let component: AddTachComponent;
  let fixture: ComponentFixture<AddTachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

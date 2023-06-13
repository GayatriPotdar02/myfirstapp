import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotdarComponent } from './potdar.component';

describe('PotdarComponent', () => {
  let component: PotdarComponent;
  let fixture: ComponentFixture<PotdarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotdarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotdarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

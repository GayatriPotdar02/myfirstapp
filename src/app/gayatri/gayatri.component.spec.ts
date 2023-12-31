import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GayatriComponent } from './gayatri.component';

describe('GayatriComponent', () => {
  let component: GayatriComponent;
  let fixture: ComponentFixture<GayatriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GayatriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GayatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

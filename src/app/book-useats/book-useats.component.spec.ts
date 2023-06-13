import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUSeatsComponent } from './book-useats.component';

describe('BookUSeatsComponent', () => {
  let component: BookUSeatsComponent;
  let fixture: ComponentFixture<BookUSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookUSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookUSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIndoComponent } from './detail-indo.component';

describe('DetailIndoComponent', () => {
  let component: DetailIndoComponent;
  let fixture: ComponentFixture<DetailIndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIndoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailIndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

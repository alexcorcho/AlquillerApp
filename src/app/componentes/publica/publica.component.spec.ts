import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaComponent } from './publica.component';

describe('PublicaComponent', () => {
  let component: PublicaComponent;
  let fixture: ComponentFixture<PublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListauserComponent } from './listauser.component';

describe('ListauserComponent', () => {
  let component: ListauserComponent;
  let fixture: ComponentFixture<ListauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListauserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

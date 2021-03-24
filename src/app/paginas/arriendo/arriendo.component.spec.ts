import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoComponent } from './arriendo.component';

describe('ArriendoComponent', () => {
  let component: ArriendoComponent;
  let fixture: ComponentFixture<ArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArriendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

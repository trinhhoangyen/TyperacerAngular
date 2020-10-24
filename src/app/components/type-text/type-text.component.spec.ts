import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTextComponent } from './type-text.component';

describe('TypeTextComponent', () => {
  let component: TypeTextComponent;
  let fixture: ComponentFixture<TypeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranactionCreateComponent } from './tranaction-create.component';

describe('TranactionCreateComponent', () => {
  let component: TranactionCreateComponent;
  let fixture: ComponentFixture<TranactionCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranactionCreateComponent]
    });
    fixture = TestBed.createComponent(TranactionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

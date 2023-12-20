import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepFunctionComponent } from './recep-function.component';

describe('RecepFunctionComponent', () => {
  let component: RecepFunctionComponent;
  let fixture: ComponentFixture<RecepFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepFunctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

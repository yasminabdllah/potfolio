import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubserveceComponent } from './subservece.component';

describe('SubserveceComponent', () => {
  let component: SubserveceComponent;
  let fixture: ComponentFixture<SubserveceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubserveceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubserveceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

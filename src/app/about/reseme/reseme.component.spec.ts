import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResemeComponent } from './reseme.component';

describe('ResemeComponent', () => {
  let component: ResemeComponent;
  let fixture: ComponentFixture<ResemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

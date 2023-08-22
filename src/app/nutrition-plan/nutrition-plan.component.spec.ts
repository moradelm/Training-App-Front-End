import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionPlanComponent } from './nutrition-plan.component';

describe('NutritionPlanComponent', () => {
  let component: NutritionPlanComponent;
  let fixture: ComponentFixture<NutritionPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionPlanComponent]
    });
    fixture = TestBed.createComponent(NutritionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

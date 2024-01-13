import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nutrition-plan',
  templateUrl: './nutrition-plan.component.html',
  styleUrls: ['./nutrition-plan.component.css']
})
export class NutritionPlanComponent implements OnInit {
  userId: number | null = null;
  nutritionData: any; 

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userIdParam = params.get('userId');
      if (userIdParam !== null) {
        this.userId = parseInt(userIdParam, 10);
        if (!isNaN(this.userId)) {
          this.getUserNutrition();
        } else {
          console.error('Invalid user ID parameter.');
        }
      } else {
        console.error('User ID parameter is missing.');
      }
    });
  }

  getUserNutrition(): void {
    if (this.userId !== null) {
      this.userService.getUserNutrition(this.userId.toString()).subscribe(
        (nutritionData) => {
          this.nutritionData = nutritionData; // Store the fetched nutrition data
        },
        (error) => {
          console.error('Error fetching user nutrition:', error);
        }
      );
    }
  }
  logout(): void {
    // Perform any necessary logout actions, like clearing user data, etc.
    // Then navigate to the login page.
    this.nutritionData = null;
    this.router.navigate(['/login']);
  }
  
}

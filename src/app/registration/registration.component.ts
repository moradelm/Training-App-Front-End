import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      activityLevel: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const userData = this.registrationForm.value;

    this.userService.createUser(userData).subscribe(
      (response) => {
        console.log('User registered successfully. ID:', response.id);

        // Assuming the response contains the newly generated user ID
        const userId = response.id;

        // Navigate to the nutrition plan page with the user ID as a parameter
        this.router.navigate(['/nutrition-plan', userId]);
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}

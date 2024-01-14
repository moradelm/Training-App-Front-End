import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, this.usernameValidator]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
  if (this.loginForm.valid) {
    const formData = this.loginForm.value;

    this.userService.login(formData.username, formData.password)
      .subscribe({
        next: (response: any) => {
          if (response.message === 'Login successful') {
             const userId = response.userId;
             console.log(userId);
          this.router.navigate(['/nutrition-plan', userId]);

          } else {
            console.log("Unexpected response:", response.message);
          }
        },
        error: (error: any) => {
          console.log("Error:", error);

          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              console.log("Client-side error:", error.error.message);
            } else {
              console.log("Server-side error:", error.error);
            }
          }
        }
      });
  }
}



  navigateToRegistration(): void {
    this.router.navigate(['/registration']);
  }
  private usernameValidator(control: FormControl): { [key: string]: any } | null {
    const validUsernamePattern = /^[a-zA-Z0-9_-]*$/; 
    const isValid = validUsernamePattern.test(control.value);
    return isValid ? null : { invalidUsername: true };
  }
}

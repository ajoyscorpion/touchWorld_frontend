import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginError: boolean = false;

  constructor(private fb: FormBuilder,private router: Router,private authService: AuthService){
    
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  onLogin() {
    const username = this.loginForm.get('username')?.value as string;
    const password = this.loginForm.get('password')?.value as string;
    if (this.authService.login(username, password)) {
      this.router.navigate(['/employees']);
    } else {
      this.loginError = true;
      alert("Invaid username or password");
    }
  }

}

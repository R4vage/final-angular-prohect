import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.login().subscribe((url) => {
      window.location.href = url.href;
    });
  }

  login() {
    return this.authService.getAuthorizationUser();
  }

  public get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }
}

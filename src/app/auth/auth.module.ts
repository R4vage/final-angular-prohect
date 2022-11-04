import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialModule, AuthRoutingModule, ReactiveFormsModule, HttpClientModule],
})
export class AuthModule {}

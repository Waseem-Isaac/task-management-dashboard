import { Component, ViewEncapsulation } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from "@angular/router";
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-join',
  imports: [LoginComponent, RegisterComponent, RouterLink, Footer],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JoinComponent {}

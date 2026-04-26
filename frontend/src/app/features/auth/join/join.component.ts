import { Component, ViewEncapsulation } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-join',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JoinComponent {}

import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [MatToolbar, RouterLink, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}

import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { Footer } from '../../shared/components/footer/footer';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  imports: [MatToolbar, RouterLink, Footer, MatIcon],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}

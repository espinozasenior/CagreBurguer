import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})

export class NavigationComponent implements OnInit {
  
  
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  

}

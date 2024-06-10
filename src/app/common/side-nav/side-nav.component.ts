import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  sideNav = [
    { icon: 'search', label: 'Search' },
    { icon: 'home', label: 'Home' },
    { icon: 'tv', label: 'TV' },
    { icon: 'sports_baseball', label: 'Sports' },
    { icon: 'movie', label: 'Movie' },
    { icon: 'category', label: 'Category' }
  ];


  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  click() {
  }

}

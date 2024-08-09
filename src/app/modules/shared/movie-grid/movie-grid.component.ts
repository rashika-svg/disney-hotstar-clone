import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('default', style({
      })),
      state('hovered', style({
        height: '260px',
      })),
      transition('default => hovered', [
        animate('300ms ease-in-out')
      ]),
      transition('hovered => default', [
        animate('200ms ease-in-out')
      ]),
    ]),
  ]
})
export class MovieGridComponent implements OnInit, AfterViewInit {
  tableName = 'Best in Movies';
  state = 'default';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<any>;

  continueWatchingMovies = [
    {
      cardImg: 'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: '1h 22m'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: '2h 50m'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: '3h 10m'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: '1h 15m'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80', seasonDate: 'S2 E1121 10 May', episode: 'New Episode'
    },
  ]

  selectedItem: any = null;
  itemWidth = 287;
  currentTranslateX = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  leftSwiperButton() {
    const maxTranslateX = 0; // Prevent scrolling beyond the first item
    this.currentTranslateX = Math.min(this.currentTranslateX + this.itemWidth, maxTranslateX);
    this.scrollContainer.nativeElement.style.transform = `translateX(${this.currentTranslateX}px)`;
    this.scrollContainer.nativeElement.style.transition = 'transform 0.5s ease-in-out';
  }

  rightSwiperButton() {
    const containerWidth = this.scrollContainer.nativeElement.getBoundingClientRect().width;
    const maxTranslateX = -(this.itemWidth * (this.continueWatchingMovies.length - Math.floor(containerWidth / this.itemWidth)));
    this.currentTranslateX = Math.max(this.currentTranslateX - this.itemWidth, maxTranslateX);
    this.scrollContainer.nativeElement.style.transform = `translateX(${this.currentTranslateX}px)`;
    this.scrollContainer.nativeElement.style.transition = 'transform 0.5s ease-in-out';
  }

  showDetails(item: any) {
    this.state = 'hovered';
    this.selectedItem = item;
  }

  hideDetails() {
    this.state = 'default';
    this.selectedItem = null;
  }
}

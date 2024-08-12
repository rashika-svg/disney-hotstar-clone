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
      cardImg: 'https://i.ytimg.com/vi/vyqrC0jDiVE/maxresdefault.jpg',
      title: 'Rocky Aur Rani Ki Prem Kahani',
      seasonDate: '1h 40m 15 Aug',
      episode: 'Continue Watching'
    },
    {
      cardImg: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F7EDF5518834D73FAD44FBF886C65E0F9655829F03A785A4819DAD1D6225FEC/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp',
      title: 'Brahmastra: Part One - Shiva',
      seasonDate: '2h 10m 22 Jul',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00323848-uwhyegleds-landscape.jpg',
      title: 'Pathaan',
      seasonDate: '2h 26m 10 Jul',
      episode: '2h 50m'
    },
    {
      cardImg: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/11/sooryavanshi-movie-review-002.jpg',
      title: 'Sooryavanshi',
      seasonDate: '1h 45m 18 Jun',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://i.ytimg.com/vi/JfbxcD6biOk/maxresdefault.jpg',
      title: 'Gully Boy',
      seasonDate: '2h 33m 05 Jun',
      episode: '3h 10m'
    },
    {
      cardImg: 'https://assets.gqindia.com/photos/5cdc078262fe40a5f883f25a/16:9/w_2560%2Cc_limit/top-image81.jpg',
      title: 'Kabir Singh',
      seasonDate: '2h 55m 25 May',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://crictoday.com/wp-content/uploads/2021/12/83-movie-cricket-today.jpg',
      title: '83',
      seasonDate: '2h 50m 10 May',
      episode: '1h 15m'
    },
    {
      cardImg: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1626507079.jpg',
      title: 'KGF: Chapter 2',
      seasonDate: '2h 45m 01 May',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://i.gadgets360cdn.com/large/darlings_need_to_know_netflix_1659531486912.jpg',
      title: 'Darlings',
      seasonDate: '2h 35m 25 Apr',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://m.media-amazon.com/images/S/pv-target-images/46cda5d3b9ae2a2a6995b341dc212549364079e8eac037306ac7ae6a6a906576._UR1920,1080_.jpg',
      title: 'Drishyam 2',
      seasonDate: '2h 23m 15 Apr',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://seniorstoday.in/wp-content/uploads/2021/08/shershah-movie-Review-by-Deepa-Gahlot.jpg',
      title: 'Shershaah',
      seasonDate: '2h 20m 05 Apr',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://static.langimg.com/photo/imgsize-90024,msid-91096226/navbharat-times.jpg',
      title: 'Bhool Bhulaiyaa 2',
      seasonDate: '2h 14m 20 Mar',
      episode: 'New Episode'
    },
    {
      cardImg: 'https://i.ytimg.com/vi/80T1qoy9RSY/maxresdefault.jpg',
      title: 'Hi Papa',
      seasonDate: '2h 30m 10 Mar',
      episode: 'New Episode'
    }
  ];


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
    this.currentTranslateX = Math.min(this.currentTranslateX + this.itemWidth * 4, maxTranslateX);
    this.scrollContainer.nativeElement.style.transform = `translateX(${this.currentTranslateX}px)`;
    this.scrollContainer.nativeElement.style.transition = 'transform 0.5s ease-in-out';
  }

  rightSwiperButton() {
    const containerWidth = this.scrollContainer.nativeElement.getBoundingClientRect().width;
    const maxTranslateX = -(this.itemWidth * (this.continueWatchingMovies.length - Math.floor(containerWidth / this.itemWidth)));
    this.currentTranslateX = Math.max(this.currentTranslateX - this.itemWidth * 4, maxTranslateX);
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

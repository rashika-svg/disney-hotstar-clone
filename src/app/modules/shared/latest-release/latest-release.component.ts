import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-latest-release',
  templateUrl: './latest-release.component.html',
  styleUrls: ['./latest-release.component.scss']
})
export class LatestReleaseComponent implements OnInit {
  tableName = 'Latest Release';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<any>;

  latestRelease = [
    {
      title: "Inception",
      year: "2010",
      duration: '2h 3m',
      imdbID: "tt1375666",
      type: "movie",
      ua:'U/A 15+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "Inception: The Cobol Job",
      year: "2010",
      duration: '2h 3m',
      imdbID: "tt5295894",
      type: "movie",
      ua:'U/A 18+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      duration: '1h 20m',
      imdbID: "tt0111161",
      type: "movie",
      ua:'U/A 16+',
      language: "English",
      poster: "https://m.media-amazon.com/images/I/51WYsbIa7TS._AC_UF1000,1000_QL80_.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: '2h 30m',
      imdbID: "tt0133093",
      type: "movie",
      ua:'U/A 10+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "Interstellar",
      year: "2014",
      duration: '1h 10m',
      imdbID: "tt0816692",
      type: "movie",
      ua:'U/A 12+',
      language: "English",
      poster: "https://m.media-amazon.com/images/I/71GTnYW5ejL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "Parasite",
      year: "2019",
      duration: '1h 10m',
      imdbID: "tt6751668",
      type: "movie",
      ua:'U/A 18+',
      language: "English",
      poster: "https://i.etsystatic.com/23402008/r/il/0e5769/2499687838/il_570xN.2499687838_7a06.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: '2h 30m',
      imdbID: "tt0133093",
      type: "movie",
      ua:'U/A 16+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: '2h 30m',
      imdbID: "tt0133093",
      type: "movie",
      ua:'U/A 14+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: '2h 30m',
      imdbID: "tt0133093",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: '2h 30m',
      imdbID: "tt0133093",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "Inception",
      year: "2010",
      duration: '2h 3m',
      imdbID: "tt1375666",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "Inception: The Cobol Job",
      year: "2010",
      duration: '2h 3m',
      imdbID: "tt5295894",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      duration: '1h 20m',
      imdbID: "tt0111161",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/I/51WYsbIa7TS._AC_UF1000,1000_QL80_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: '2h 30m',
      imdbID: "tt0133093",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
    {
      title: "Interstellar",
      year: "2014",
      duration: '1h 10m',
      imdbID: "tt0816692",
      type: "movie",
      ua:'U/A 13+',
      language: "English",
      poster: "https://m.media-amazon.com/images/I/71GTnYW5ejL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam harum voluptas, quos voluptatem eum vero amet accusamus aliquam"
    },
  ];

  selectedItem: any = null;
  itemWidth = 296;
  currentTranslateX = 0;

  constructor() { }

  ngOnInit(): void {
  }

  leftSwiperButton() {
    const maxTranslateX = 0; // Prevent scrolling beyond the first item
    this.currentTranslateX = Math.min(this.currentTranslateX + this.itemWidth, maxTranslateX);
    this.scrollContainer.nativeElement.style.transform = `translateX(${this.currentTranslateX}px)`;
  }

  rightSwiperButton() {
    const containerWidth = this.scrollContainer.nativeElement.getBoundingClientRect().width;
    const maxTranslateX = -(this.itemWidth * (this.latestRelease.length - Math.floor(containerWidth / this.itemWidth)));
    this.currentTranslateX = Math.max(this.currentTranslateX - this.itemWidth, maxTranslateX);
    this.scrollContainer.nativeElement.style.transform = `translateX(${this.currentTranslateX}px)`;
  }

  showDetails(item: any) {
    this.selectedItem = item;
  }

  hideDetails() {
    this.selectedItem = null;
  }

}

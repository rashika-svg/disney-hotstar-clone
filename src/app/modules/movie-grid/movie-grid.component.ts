import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {

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

  latestRelease = [
    {
      "Title": "Inception",
      "Year": "2010",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Inception: The Cobol Job",
      "Year": "2010",
      "imdbID": "tt5295894",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg"
    },
    {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "imdbID": "tt0111161",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/I/51WYsbIa7TS._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/I/71GTnYW5ejL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
    },
    {
      "Title": "Parasite",
      "Year": "2019",
      "imdbID": "tt6751668",
      "Type": "movie",
      "Poster": "https://i.etsystatic.com/23402008/r/il/0e5769/2499687838/il_570xN.2499687838_7a06.jpg"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    }, {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      "Title": "Inception",
      "Year": "2010",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Inception: The Cobol Job",
      "Year": "2010",
      "imdbID": "tt5295894",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg"
    },
    {
      "Title": "The Shawshank Redemption",
      "Year": "1994",
      "imdbID": "tt0111161",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/I/51WYsbIa7TS._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/I/71GTnYW5ejL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
    },
  ];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<any>;
  @ViewChild('scrollContainer2') scrollContainer2!: ElementRef<any>;

  constructor(private renderer: Renderer2) {
    // this.scrollContainer;
    // this.scrollContainer2;
  }

  ngOnInit(): void {
  }
  // ngAfterViewInit(): void {
  //   this.updateVisibleElements();
  //   this.scrollContainer.nativeElement.addEventListener('scroll', () => this.updateVisibleElements());
  //   this.scrollContainer2.nativeElement.addEventListener('scroll', () => this.updateVisibleElements());
  // }

  // updateVisibleElements() {
  //   this.updateVisibility(this.scrollContainer);
  //   this.updateVisibility(this.scrollContainer2);
  // }

  // updateVisibility(container: ElementRef) {
  //   const children = Array.from(container.nativeElement.children) as HTMLElement[];
  //   const containerRect = container.nativeElement.getBoundingClientRect();

  //   let firstVisible: HTMLElement | null = null;
  //   let lastVisible: HTMLElement | null = null;

  //   children.forEach((child: HTMLElement) => {
  //     const childRect = child.getBoundingClientRect();
  //     if (childRect.right >= containerRect.left && childRect.left <= containerRect.right) {
  //       if (!firstVisible) {
  //         firstVisible = child;
  //       }
  //       lastVisible = child;
  //     }
  //   });

  //   children.forEach((child: HTMLElement) => {
  //     console.log(child);
  //     this.renderer.removeClass(child, 'scale-125');
  //   });

  //   if (firstVisible) {
  //     this.renderer.addClass(firstVisible, 'scale-125');
  //   }
  //   if (lastVisible && lastVisible !== firstVisible) {
  //     this.renderer.addClass(lastVisible, 'scale-125');
  //   }
  // }

  scroll(container: ElementRef, direction: 'left' | 'right') {
    const containerWidth = container.nativeElement.clientWidth;
    const pixelValue = containerWidth * 1; // 10%

    container.nativeElement.scrollTo({
      left: container.nativeElement.scrollLeft + (direction === 'left' ? -pixelValue : pixelValue),
      behavior: 'smooth'
    });
  }

  leftSwiperButton(container: string) {
    const containerRef = container === 'cont1' ? this.scrollContainer : this.scrollContainer2;
    this.scroll(containerRef, 'left');
  }

  rightSwiperButton(container: string) {
    const containerRef = container === 'cont1' ? this.scrollContainer : this.scrollContainer2;
    this.scroll(containerRef, 'right');
  }

  // leftSwiperButton(container: any) {
  //   const containerWidth = this.scrollContainer!.nativeElement.clientWidth;
  //   const percentage = 100; // 10%
  //   const pixelValue = (percentage / 100) * containerWidth;

  //   if (container === 'cont1') {
  //     this.scrollContainer!.nativeElement.scrollTo({
  //       left: this.scrollContainer!.nativeElement.scrollLeft - pixelValue,
  //       behavior: 'smooth'
  //     });
  //   }
  //   if (container === 'cont2') {
  //     this.scrollContainer2!.nativeElement.scrollTo({
  //       left: this.scrollContainer2!.nativeElement.scrollLeft - pixelValue,
  //       behavior: 'smooth'
  //     });
  //   }

  // }

  // rightSwiperButton(container: string) {
  //   const containerWidth = this.scrollContainer!.nativeElement.clientWidth;
  //   const percentage = 100; // 10%
  //   const pixelValue = (percentage / 100) * containerWidth;

  //   if (container === 'cont1') {
  //     this.scrollContainer!.nativeElement.scrollTo({
  //       left: this.scrollContainer!.nativeElement.scrollLeft + pixelValue,
  //       behavior: 'smooth'
  //     });
  //   }
  //   if (container === 'cont2') {
  //     this.scrollContainer2!.nativeElement.scrollTo({
  //       left: this.scrollContainer2!.nativeElement.scrollLeft + pixelValue,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  removeFromList() {

  }


}

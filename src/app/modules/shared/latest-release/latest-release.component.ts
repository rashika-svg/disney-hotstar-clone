import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-latest-release',
  templateUrl: './latest-release.component.html',
  styleUrls: ['./latest-release.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('default', style({
      })),
      state('hovered', style({
        height: '200px',
      })),
      transition('default => hovered', [
        animate('300ms ease-in-out')
      ]),
      transition('hovered => default', [
        animate('300ms ease-in-out')
      ]),
    ]),
  ]
})
export class LatestReleaseComponent implements OnInit {
  tableName = 'Latest Release Sci-Fi';
  state = 'default';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<any>;

  latestRelease = [
    {
      title: "Blade Runner 2049",
      year: "2017",
      duration: "2h 44m",
      imdbID: "tt1856101",
      type: "movie",
      ua: "U/A 16+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
      cardImg: "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/39/1280x960/sd-aspect-1506522430-2049.jpg?resize=1200:*",
      description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years."
    },
    {
      title: "Inception",
      year: "2010",
      duration: "2h 28m",
      imdbID: "tt1375666",
      type: "movie",
      ua: "U/A 13+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      cardImg: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
    },
    {
      title: "Interstellar",
      year: "2014",
      duration: "2h 49m",
      imdbID: "tt0816692",
      type: "movie",
      ua: "U/A 13+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      cardImg: "https://images-3.rakuten.tv/storage/snapshot/shot/67530f97-e9a5-4120-be5c-2c2f7b99255e-snapshot-1590658151-width936-quality90.jpeg",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      title: "The Matrix",
      year: "1999",
      duration: "2h 16m",
      imdbID: "tt0133093",
      type: "movie",
      ua: "U/A 15+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      cardImg: "https://spaces.filmstories.co.uk/uploads/2020/07/the-matrix-dvd.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
      title: "Mad Max: Fury Road",
      year: "2015",
      duration: "2h 0m",
      imdbID: "tt1392190",
      type: "movie",
      ua: "U/A 18+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      cardImg: "https://images.cdn.prd.api.discomax.com/2023/11/15/5a8a0a95-ab83-39a2-96a3-e2c1f03aeb10.jpeg?f=jpg&q=75&w=1280&w=1200",
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max."
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
      duration: "2h 4m",
      imdbID: "tt0080684",
      type: "movie",
      ua: "U/A 13+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      cardImg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B92552B7CE9B7BB39BB3BDC551F35DB98C04740118F5B30975134814DF7A4E62/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
      description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader."
    },
    {
      title: "The Terminator",
      year: "1984",
      duration: "1h 47m",
      imdbID: "tt0088247",
      type: "movie",
      ua: "U/A 15+",
      language: "English",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/665b3fc0c90062aaff80cf9e27fb9c042b76017a4019dc4b1cc5238726c581b7.jpg",
      cardImg: "https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=780&q=75",
      description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation."
    },
    {
      title: "Arrival",
      year: "2016",
      duration: "1h 56m",
      imdbID: "tt2543164",
      type: "movie",
      ua: "U/A 13+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
      cardImg: "https://assets-in.bmscdn.com/discovery-catalog/events/et00045012-qducrdzthv-landscape.jpg",
      description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world."
    },
    {
      title: "Ex Machina",
      year: "2014",
      duration: "1h 48m",
      imdbID: "tt0470752",
      type: "movie",
      ua: "U/A 16+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_.jpg",
      cardImg: "https://upload.wikimedia.org/wikipedia/en/b/ba/Ex-machina-uk-poster.jpg",
      description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I."
    },
    {
      title: "Gravity",
      year: "2013",
      duration: "1h 31m",
      imdbID: "tt1454468",
      type: "movie",
      ua: "U/A 13+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg",
      cardImg: "https://m.media-amazon.com/images/S/pv-target-images/90c0ba3e9c918ad2e3337bc6d6d4a775c35677220ba9aba855378ab2fe41a32b.jpg",
      description: "Two astronauts work together to survive after an accident leaves them stranded in space."
    },
    {
      title: "The Fifth Element",
      year: "1997",
      duration: "2h 6m",
      imdbID: "tt0119116",
      type: "movie",
      ua: "U/A 13+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg",
      cardImg: "https://shatpod.com/movies/wp-content/uploads/The-Fifth-Element-1997-Movie-Poster.jpg",
      description: "In the year 2263, a cab driver in a futuristic New York City becomes involved in a quest to save the world from an impending cosmic evil."
    },
    {
      title: "District 9",
      year: "2009",
      duration: "1h 52m",
      imdbID: "tt1136608",
      type: "movie",
      ua: "U/A 15+",
      language: "English",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM4OTI1OTM5NF5BMl5BanBnXkFtZTcwMzk5MTU1Mg@@._V1_.jpg",
      cardImg: "https://facts.net/wp-content/uploads/2023/06/43-facts-about-the-movie-district-9-1687517115.jpeg",
      description: "An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a kindred spirit in a government agent who is exposed to their mysterious biotechnology."
    },
  ];

  selectedItem: any = null;
  itemWidth = 190;
  currentTranslateX = 0;

  constructor() { }

  ngOnInit(): void {
  }

  leftSwiperButton() {
    const maxTranslateX = 0; // Prevent scrolling beyond the first item
    this.currentTranslateX = Math.min(this.currentTranslateX + this.itemWidth, maxTranslateX);
    this.scrollContainer.nativeElement.style.transform = `translateX(${this.currentTranslateX}px)`;
    this.scrollContainer.nativeElement.style.transition = 'transform 0.5s ease-in-out';
  }

  rightSwiperButton() {
    const containerWidth = this.scrollContainer.nativeElement.getBoundingClientRect().width;
    const maxTranslateX = -(this.itemWidth * (this.latestRelease.length - Math.floor(containerWidth / this.itemWidth)));
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

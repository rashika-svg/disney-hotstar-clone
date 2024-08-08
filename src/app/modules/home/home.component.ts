import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { setImmediate } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieCarousel = [
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7542/1657542-t-e9cde16daf5d',
      genre: 'Drama',
      season: 'Season 3',
      year: '2020',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: '../../../assets/photos/d.webp',
      video: '/assets/videos/d.mp4',
      duration: '2h 49m',
      chronology: 'New Release',
      language: 'English',
      censor: '',
    },
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      genre: 'Mythology | Animation | Creatures & Monsters | Fantasy',
      season: 'Season 4',
      year: '2015',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/2455/1717523662455-i',
      video: '/assets/videos/d.mp4',
      duration: '1h 30m',
      chronology: 'Latest',
      language: 'Spanish',
      censor: '',
    },
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8803/1714809038803-t',
      genre: 'Thriller | Adventure',
      season: 'Season 1',
      year: '2018',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4736/1714809064736-i',
      video: '/assets/videos/b.mp4',
      duration: '2h 51m',
      chronology: 'New Release',
      language: 'Tamil',
      censor: '',
    },
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2765/1714051812765-t',
      genre: 'Thriller | Romance ',
      season: 'Season 1',
      year: '2009',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8573/1714406958573-i',
      video: '/assets/videos/b.mp4',
      duration: '1h 50m',
      chronology: 'New Episode',
      language: 'English',
      censor: '',
    },
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8256/1712839838256-t',
      genre: 'Romance | Comedy',
      season: 'Season 2',
      year: '2011',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1032/1712839861032-i',
      video: '/assets/videos/c.mp4',
      duration: '3h',
      chronology: 'Latest',
      language: 'Hindi',
      censor: '',
    },
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/1454/1716799501454-t',
      genre: 'Comedy',
      season: 'Season 5',
      year: '2013',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6252/1716293606252-i',
      video: '/assets/videos/e.mp4',
      duration: '3h 10m',
      chronology: 'New Episode',
      language: 'French',
      censor: '',
    },
    {
      icon: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/1326/1707280641326-t',
      genre: 'Comedy | Drama | Buddy',
      season: 'Season 6',
      year: '2019',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      thumbnail: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3343/1707280633343-i',
      video: '/assets/videos/f.mp4',
      duration: '2h 18m',
      chronology: 'New Release',
      language: 'Hindi',
      censor: '',
    },
    // {
    //   icon: 'Icon',
    //   genre: 'Mystery',
    //   season: 'Season 7',
    //   year: '2010',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    //   thumbnail: '../../../assets/photos/g.png',
    //   video: '/assets/videos/g.mp4',
    //   duration: '1h 15m',
    //   chronology: 'New Episode',
    //   language: 'English',
    //   censor: '',
    // },
    // {
    //   icon: 'Icon',
    //   genre: 'Suspense',
    //   season: 'Season 8',
    //   year: '2024',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    //   thumbnail: '../../../assets/photos/g.png',
    //   video: '/assets/videos/g.mp4',
    //   duration: '2h 8m',
    //   chronology: 'New Release',
    //   language: 'Greek',
    //   censor: '',
    // },
    // {
    //   icon: 'Icon',
    //   genre: 'Romance',
    //   season: 'Season 9',
    //   year: '2022',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    //   thumbnail: '../../../assets/photos/h.png',
    //   video: '/assets/videos/h.mp4',
    //   duration: '1h 32m',
    //   chronology: 'New Episode',
    //   language: '',
    //   censor: '',
    // },
    // {
    //   icon: 'Icon',
    //   genre: 'Crime',
    //   season: 'Season 10',
    //   year: '2020',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    //   thumbnail: '../../../assets/photos/i.png',
    //   video: '/assets/videos/i.mp4',
    //   duration: '2h 17m',
    //   chronology: 'Latest',
    //   language: 'English',
    //   censor: '',
    // },
    // {
    //   icon: 'Icon',
    //   genre: 'Drama',
    //   season: 'Season 11',
    //   year: '2011',
    //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    //   thumbnail: '../../../assets/photos/j.png',
    //   video: '/assets/videos/j.mp4',
    //   duration: '3h 10m',
    //   chronology: 'New Episode',
    //   language: 'Hindi',
    //   censor: '',
    // },
  ]

  selectedMovieIndex: number = 0;
  selectedMovie = this.movieCarousel[0];
  isMuted = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('thumbnail', { static: true }) thumbnail!: ElementRef;
  @ViewChild('featVideo', { static: true }) featVideo!: ElementRef;

  constructor() {
    this.scrollContainer;
    this.thumbnail;
    this.featVideo;
  }

  ngOnInit(): void {
    // this.updateButtonVisibility();
  }

 
  toggleMute() {
    this.isMuted = !this.isMuted;
  }

  leftSwiperButton() {
    this.scrollContainer.nativeElement.scrollLeft -= 120;
    // this.scrollContainer!.nativeElement.style.transition = 'transform 0.5s';
  }

  rightSwiperButton() {
    this.scrollContainer.nativeElement.scrollLeft += 120;
    // this.scrollContainer!.nativeElement.style.transition = 'transform 0.5s';
  }

  selectedItem(index: number) {
    this.selectedMovieIndex = index;
    this.selectedMovie = this.movieCarousel[this.selectedMovieIndex];
    if (this.selectedMovie) {
      this.thumbnail.nativeElement.style.display = 'block';
      this.featVideo.nativeElement.style.display = 'none';

      setTimeout(() => {
        this.thumbnail.nativeElement.style.display = 'none';
        this.featVideo.nativeElement.style.display = 'block';
      }, 2000)
    }
  }
}

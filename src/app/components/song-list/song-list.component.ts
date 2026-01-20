import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../core/models/song.model';
import { MusicService } from '../../core/services/music.service';
import { AudioService } from '../../core/services/audio.service';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit, OnDestroy {

  songs: Song[] = [];

  heroImages: string[] = [
    '/assets/image/bg1.webp',
    '/assets/image/bg2.webp',
    '/assets/image/bg3.webp'
  ];

  currentHeroIndex = 0;
  intervalId!: number;

  constructor(
    private musicService: MusicService,
    private audioService: AudioService
  ) {}

  ngOnInit(): void {
    this.songs = this.musicService.getSongs();

    this.intervalId = window.setInterval(() => {
      this.currentHeroIndex =
        (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  playSong(song: Song): void {
    this.audioService.play(song.audioUrl);
  }

  toggleFavorite(song: Song): void {
    this.musicService.toggleFavorite(song);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../core/services/artist.service';
import { Artist } from '../../core/models/artist.model';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artists = this.artistService.getArtists();
  }
}

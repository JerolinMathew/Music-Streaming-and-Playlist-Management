import { Component } from '@angular/core';
import { Artist } from '../../core/models/artist.model';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent {
  artist: Artist = {
    id: 1,
    name: 'Nova',
    genre: 'Electronic',
    bio: 'Electronic music producer known for ambient and synth sounds.',
    imageUrl: 'assets/image/alanajordan.jpg'
  };
}

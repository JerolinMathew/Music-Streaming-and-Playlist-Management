import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio = new Audio();
  private playingSubject = new BehaviorSubject<boolean>(false);
  readonly playing$ = this.playingSubject.asObservable();

  private currentTrackSubject = new BehaviorSubject<string | null>(null);
  readonly currentTrack$ = this.currentTrackSubject.asObservable();

  private currentUrl: string | null = null;

  play(url: string): void {
    // Normalize URL: make absolute to root if needed
    const src = url.startsWith('http') || url.startsWith('/') ? url : `/${url}`;
    this.audio.src = src;
    this.currentUrl = src;
    this.audio.load();
    this.audio.play()
      .then(() => {
        this.playingSubject.next(true);
        this.currentTrackSubject.next(src);
      })
      .catch((err) => {
        // Playback may be blocked by browser autoplay policies or other errors
        // Log to console for debugging and keep playing state false
        // eslint-disable-next-line no-console
        console.error('Audio play failed for', src, err);
        this.playingSubject.next(false);
      });

    // When playback ends, update state
    this.audio.onended = () => {
      this.playingSubject.next(false);
    };
  }

  pause(): void {
    this.audio.pause();
    this.playingSubject.next(false);
  }

  resume(): void {
    if (this.currentUrl) {
      // Normalize to an absolute URL for comparison
      const normalized = this.currentUrl.startsWith('http')
        ? this.currentUrl
        : (this.currentUrl.startsWith('/') ? location.origin + this.currentUrl : location.origin + '/' + this.currentUrl);

      // Only replace `src` if it's different; do NOT call `load()` here because
      // that would reset `currentTime` and restart the track. Preserving
      // `currentTime` allows resume to continue where it left off.
      if (this.audio.src !== normalized) {
        this.audio.src = normalized;
      }

      this.audio.play()
        .then(() => {
          this.playingSubject.next(true);
          this.currentTrackSubject.next(normalized);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Audio resume failed for', normalized, err);
          this.playingSubject.next(false);
        });
    }
  }

  setVolume(value: number): void {
    // Expect value in range 0..1
    this.audio.volume = Math.max(0, Math.min(1, value));
  }

  getVolume(): number {
    return this.audio.volume;
  }
}

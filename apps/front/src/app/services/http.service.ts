import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  public fetchGame(): Observable<Game> {
    return this.httpClient.get<Game>('api/game');
  }

}

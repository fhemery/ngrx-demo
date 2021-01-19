import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { gameFetch, gameFetchFailure, gameFetchSuccess } from '../actions';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';
import { of } from 'rxjs';

@Injectable()
export class GameEffects {
  public constructor(
    private actions$: Actions,
    private store: Store<Game>,
    private httpService: HttpService
  ) {
  }

  public loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gameFetch),
      switchMap(() => this.httpService.fetchGame()),
      switchMap((game: Game) => {
        if (game) {
          return of(gameFetchSuccess({game: game}));
        }
        return of(gameFetchFailure());
      })
    ));
}

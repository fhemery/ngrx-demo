import { createAction, props } from '@ngrx/store';
import { Game } from '../../model';

export const gameFetch = createAction('[Game] Fetch game info')
export const gameFetchSuccess = createAction('[Game] Fetch game success', props<{game: Game}>())
export const gameFetchFailure = createAction('[Game] Fetch game failure')

import { Game } from '../../model';
import { Action, createReducer, on } from '@ngrx/store';
import { gameFetchSuccess } from '../actions';

const initialState: Game = null;

const red = createReducer(
  initialState,
  on(gameFetchSuccess, (state, apiScore: {game: Game}) => {
    return apiScore.game
  })
);

export function reducers(state:Game | undefined, action: Action) {
  return red(state, action);
}


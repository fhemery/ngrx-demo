import { Game } from '../../model';
import { createSelector } from '@ngrx/store';

const scoreStorePart: (root: any) => Game = (root: any) => root.game;

export const selectOpponents = createSelector(scoreStorePart, score => score?.opponents || {})

import { Game } from '../../model';
import { createSelector } from '@ngrx/store';

const gameStorePart: (root: any) => Game = (root: any) => root.game;

export const selectOpponents = createSelector(gameStorePart, score => score?.opponents || {p1: '', p2: ''})

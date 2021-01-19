import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { gameFetch } from '../state/actions';
import { Observable } from 'rxjs';
import { Opponents } from '../model';
import { selectOpponents } from '../state/selectors';

@Injectable()
export class TennisFacade {

  constructor(private store: Store) {}

  public opponents$: Observable<Opponents> = this.store.pipe(select(selectOpponents));

  public initScore(): void {
    this.store.dispatch(gameFetch());
  }
}

import { Component } from '@angular/core';
import { TennisFacade } from './services/tennis.facade';
import { Observable } from 'rxjs';
import { Opponents } from './model';

@Component({
  selector: 'tennis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public opponents$: Observable<Opponents> = this.tennisFacade.opponents$;

  constructor(private tennisFacade: TennisFacade) {
    this.tennisFacade.initScore();
  }
}

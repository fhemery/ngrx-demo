import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScorePanelComponent } from './score-panel/score-panel.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';
import { TennisFacade } from './services/tennis.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpService } from './services/http.service';
import { EffectsModule } from '@ngrx/effects';
import { ScoreEffects } from './state/effects';

@NgModule({
  declarations: [AppComponent, ScorePanelComponent],
  imports: [BrowserModule, HttpClientModule,
    StoreModule.forRoot({ game: reducers }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([ScoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })],
  providers: [TennisFacade, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

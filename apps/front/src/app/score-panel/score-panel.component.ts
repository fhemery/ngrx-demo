import { Component, Input, OnInit } from '@angular/core';
import { Opponents } from '../model';

@Component({
  selector: 'tennis-score-panel',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.css']
})
export class ScorePanelComponent implements OnInit {

  @Input() opponents: Opponents

  constructor() { }

  ngOnInit(): void {
  }

}

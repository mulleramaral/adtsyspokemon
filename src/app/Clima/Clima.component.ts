import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Model } from '../model/model';

@Component({
  selector: 'clima',
  templateUrl: './Clima.component.html',
  styleUrls: ['./Clima.component.css']
})
export class ClimaComponent implements OnInit {
  @Input() model: Model;
  constructor() { }

  ngOnInit() {
  }
}

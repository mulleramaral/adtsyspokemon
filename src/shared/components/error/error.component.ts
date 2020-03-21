import { Component, OnInit, Input } from '@angular/core';
import { Error } from 'src/app/model/model';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() model: Error;
  constructor() { }

  ngOnInit() {
  }

}

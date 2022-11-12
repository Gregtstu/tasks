import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../settings/interfaces/itask";

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  @Input() task!:ITask | null;
  @Output() sentTask:EventEmitter<ITask>;
  constructor() {
    this.sentTask = new EventEmitter<ITask>();
  }

  ngOnInit(): void {
  }


}

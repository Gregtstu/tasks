import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../settings/interfaces/itask";

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  @Input() task!:ITask | undefined;
  @Input() flag!:boolean;
  @Output() sentTask:EventEmitter<ITask>;
  constructor() {
    this.sentTask = new EventEmitter<ITask>();
  }

  ngOnInit(): void {
  }

  clear() {
    this.task = undefined;
  }

  create() {
    this.sentTask.emit(this.task);
    this.task = undefined;
  }
}

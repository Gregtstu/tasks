import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public flafDisabledButton:boolean;

  constructor() {
    this.flafDisabledButton = false;
  }

  ngOnInit(): void {
  }

}

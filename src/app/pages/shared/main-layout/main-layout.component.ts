import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../settings/services/api.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public flafDisabledButton: boolean;

  constructor(private apiSerrv: ApiService) {
    this.flafDisabledButton = false;
  }

  ngOnInit(): void {
  }



}

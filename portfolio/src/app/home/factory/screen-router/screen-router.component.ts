import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-router',
  templateUrl: './screen-router.component.html',
  styleUrls: ['./screen-router.component.scss']
})
export class ScreenRouterComponent implements OnInit {

  @Input() page = "";
  constructor() { }

  ngOnInit(): void {
  }

}

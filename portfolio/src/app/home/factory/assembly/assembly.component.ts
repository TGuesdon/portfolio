import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss']
})
export class AssemblyComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.initScreen();
  }

}

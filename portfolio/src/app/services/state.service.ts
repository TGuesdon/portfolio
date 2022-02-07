import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public curtain: boolean = true;
  public openingCurtain: boolean = false;
  public rotatingLever: boolean = false;

  constructor() {

  }

  public openCurtain(){
    this.rotatingLever = true;

    setTimeout(() => {
      this.openingCurtain = true;

      setTimeout(() => {
        this.curtain = false;
        this.openingCurtain = false;
        this.rotatingLever = false;
      }, 2000)
    }, 1000)
  }
}

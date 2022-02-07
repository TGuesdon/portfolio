import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public curtain: boolean = true;
  public openingCurtain: boolean = false;

  constructor() {

  }

  public openCurtain(){
    this.openingCurtain = true;

    setTimeout(() => {
      this.curtain = false;
      this.openingCurtain = false;
    }, 2000)
  }
}

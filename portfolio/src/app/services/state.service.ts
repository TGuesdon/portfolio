import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public curtain: boolean = true;
  public openingCurtain: boolean = false;
  public rotatingLever: boolean = false;

  public projectIndex: number = 0;
  public projects: string[] = ['resume', 'twitchparty', 'idealtek', 'photocleaner', 'spaceconquest', 'menulib', 'mashuphelper', 'blindtestrap', 'buildideas', 'planetgenerator', 'finalschoolproject'];
  
  /** 0 : Idle, -1 : Rotating backward, 1 : Rotating forward */
  public isAssemblyRotating: number = 0;
  public poleOpened: boolean = false;
  public openingPole: boolean = false;
  public closingPole: boolean = false;

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

  public initScreen(){
    this.isAssemblyRotating = 1;
    this.openPole();
  }

  public changeProjectIndex(idx: number){
    if(idx > this.projects.length || idx < 0){
      console.error("Asked for projects idx : " + idx + " which doesn't exist");
    }

    this.isAssemblyRotating = idx > this.projectIndex ? 1 : -1;

    this.projectIndex = idx;

    this.openPole();
  }

  public nextProject(){
    this.isAssemblyRotating = 1;
        
    this.projectIndex ++;
    if(this.projectIndex >= this.projects.length){
      this.projectIndex = 0;
    }

    /** Pole management */
    this.openPole();
  }

  public previousProject(){
    this.isAssemblyRotating = -1;
    
    this.projectIndex --;
    if(this.projectIndex < 0){
      this.projectIndex = this.projects.length - 1;
    }

    /** Pole management */
    this.openPole();
  }

  public openPole(){
    if(this.poleOpened){
      this.closingPole = true;
    }
    setTimeout(() => {
      this.closingPole = false;
      this.openingPole = true;
    }, 1500);


    setTimeout(()=> {
      this.isAssemblyRotating = 0;
      this.poleOpened = true;
      this.openingPole = false;
    }, 3000)
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {

  @ViewChild('tank') tank: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('cursor') cursor: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('statue') statue: ElementRef<HTMLDivElement> | undefined;

  private target: {x: number, y: number} | null = null;
  private scale: number = 0;
  private inertia: number = 0.1;

  constructor() { }

  mouseMove(e: MouseEvent){
    if(!this.tank) return;

    const box = this.tank.nativeElement.getBoundingClientRect();

    const relativeX = e.clientX - box.left;
    const relativeY = e.clientY - box.top;


    this.target = {x: relativeX - 10, y: relativeY - 10};
  }

  mouseLeave(){
    if(!this.cursor || !this.tank) return;

    const box = this.tank.nativeElement.getBoundingClientRect();

    const tx = box.width / 2 - 10;
    const ty = box.height -5;

    this.target = {x: tx, y: ty};
  }

  inertiaTo(current: number, target: number, inertia: number){
    const distToGo = target - current;

    return Math.abs(distToGo) < 0.01 ? target : current + (distToGo * inertia);
  }

  updateCursor(){
      if(this.cursor && this.target && this.tank && this.statue){
        const cursorBox = this.cursor.nativeElement.getBoundingClientRect();
        const tank = this.tank.nativeElement.getBoundingClientRect();

        const tx = this.inertiaTo(cursorBox.left - tank.left, this.target.x, this.inertia);
        const ty = this.inertiaTo(cursorBox.top - tank.top, this.target.y, this.inertia);

        const centerY = tank.height / 2; 
        this.scale = 1 - Math.abs((ty - centerY) / centerY);

        this.cursor.nativeElement.style.transform = `translateX(${tx}px) translateY(${ty}px) scale(${1 + this.scale * 1.5})`;
        this.cursor.nativeElement.style.filter = `contrast(${200 * this.scale}%)`;
      }

      requestAnimationFrame(this.updateCursor.bind(this));
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    if(!this.tank || !this.statue) return;
    this.tank.nativeElement.addEventListener('mousemove', (e) => this.mouseMove(e));
    this.tank.nativeElement.addEventListener('mouseleave', () => this.mouseLeave());

    this.mouseLeave();
    requestAnimationFrame(this.updateCursor.bind(this));
  }

  ngOnDestroy(): void{
    if(!this.tank) return;

    this.tank.nativeElement.removeEventListener('mouseover', (e) => this.mouseMove(e));
    this.tank.nativeElement.removeEventListener('mouseleave', () => this.mouseLeave());

  }

}

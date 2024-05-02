import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent  {
  @Input() data : any;
  @Output() remove : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onRemove() : void{
    this.remove.emit(this.data);
  }

  

}

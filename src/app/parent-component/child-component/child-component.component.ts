import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() stuffFromParent: string;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.change.emit(this.stuffFromParent);
    console.log(this.stuffFromParent);
  }

}

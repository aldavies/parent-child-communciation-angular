import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  parentMessage: string = 'I am the message in the parent component';
  childMessage: string = 'I am the message in the parent component that is to be passed down to the child';
  
  constructor() { }
  
  ngOnInit() {
  }

}

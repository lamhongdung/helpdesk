import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nhap(event: EventTarget|null) {
    console.log(event)
  }

  Apoint(x?: number, y?: number){
    if(x) 
        console.log('X : ' + x);
    else 
        console.log('Value of X coordinate not given');
    if(y) 
        console.log('Y : ' + y);
    else 
        console.log('Value of Y coordinate not given');
  }


}

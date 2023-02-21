import { Component, OnInit } from '@angular/core';
interface IanimalList {
 id : number; 
  name : string;
 fed : boolean
}
@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  animalList: IanimalList[] = [];

  constructor() { }

ngOnInit(): void {
this.animalList = [
  {
    id: 1,
    name: 'Panda',
    fed: true
  },
  {
    id: 2,
    name: 'Elephant',
    fed: true
  },
  {
    id: 3,
    name: 'Lion',
    fed: false
  }
]
  }
  onlike(animal:any): void{
    window.alert(`I like the ${animal.name}`!);
  }

};

import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';

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

  constructor(private zooService: ZooService) { }

ngOnInit(): void {
this.animalList = this.zooService.getAnimals();
  }
  onlike(animal:any): void{
    window.alert(`I like the ${animal.name}`!);
  }

};

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements ZooAnimalComponent ,OnInit{
  @Input() animal: any;
  @Output() like = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }


}

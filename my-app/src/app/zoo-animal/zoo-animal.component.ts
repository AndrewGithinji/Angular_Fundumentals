import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements ZooAnimalComponent ,OnInit{
  @Input() animal: any;


  constructor() { }

  ngOnInit(): void {

  }


}

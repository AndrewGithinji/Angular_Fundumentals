import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  username: string | undefined;
  password: string | undefined;


  constructor() {}

  ngOnInit(): void {
    
  }
  onSubmit(): void {
    alert(`${this.username} has successfully signed in!`);
  }

}

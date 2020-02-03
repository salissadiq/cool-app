import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickcounter = 0;
  name = null;
  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickcounter += 1;
  }
  setClasses(){
    let myClasses = {
      active: this.clickcounter > 4,
      notactive: this.clickcounter <= 4
    }
    return myClasses;
  }

}

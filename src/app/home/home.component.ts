import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstname!:string;
  lastname!:string;
  adress!:string;
  emails!:string;
  phone!:string;
  age!:string;
  constructor() {
    this.firstname="Ablaye";
    this.lastname="Fall";
    this.adress="Pikine Tally Bou Mack";
    this.emails="ptfall1996@gmail.com";
    this.phone="77 746 60 68";
    this.age="19/05/1996";
   }

  ngOnInit(): void {
  }

}

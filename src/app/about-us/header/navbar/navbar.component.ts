import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  womenCollectionFlag=false;

  constructor() { }

  ngOnInit(): void {
  }

  showWomenCollection(){
    this.womenCollectionFlag=true;
    console.log(this.womenCollectionFlag);
  }
  hideWomenCollection(){
    this.womenCollectionFlag=false;
    console.log(this.womenCollectionFlag);
  }
}

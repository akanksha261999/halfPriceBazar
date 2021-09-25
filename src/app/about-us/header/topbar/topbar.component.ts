import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  showDropdown=false;
  showDropdown2=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(){
    this.showDropdown=!this.showDropdown;
    console.log(this.showDropdown);
  }
  toggleDropdown2(){
    this.showDropdown2=!this.showDropdown2;
    console.log(this.showDropdown);
  }
  
}

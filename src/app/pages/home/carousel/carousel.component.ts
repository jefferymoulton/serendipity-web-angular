import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}

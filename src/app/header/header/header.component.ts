import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoImg:string = '../../../assets/images/avengers-logo.jpg'
  public marvelUrl:string = 'http://marvel.com';

  constructor() { }

  ngOnInit(): void {
  }

}

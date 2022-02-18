import { AvengersService } from './../avengers.service'
import { Component, OnInit } from '@angular/core'
import { Avenger } from '../../interfaces/avenger'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public avengers: Avenger[] = [];
  public detailPop: boolean= false;

  //vars for popup 
  public popHero: Avenger = {
      hero:'',
      name:'',
      link:'',
      img:'',
      bgImg:'',
      history:'',
      isActive:false
  }

  constructor( private AvengersService: AvengersService ) {
    
   }

  ngOnInit(): void {
    this.avengers = this.AvengersService.avengers;
  }

  public showDetail(hero:Avenger) {
    this.detailPop = !this.detailPop;

    //fill hero object
    this.popHero.hero = hero.hero;
    this.popHero.name = hero.name;
    this.popHero.link = hero.link;
    this.popHero.img = hero.img;
    this.popHero.bgImg = hero.bgImg;
    this.popHero.history = hero.history;
  }

  public closeDetail() {
    this.detailPop = !this.detailPop;
  }

}

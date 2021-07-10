import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service'; 
import { MessageService } from '../message.service'; 

import { Hero } from '../hero';  // 사용자 지정 타입 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, 
              private messageService: MessageService) { }

  // 컴포넌트를 초기화하는 로직은 이 메소드에 작성한다.
  ngOnInit(): void {
    this.getHeroes();
  }

  // <li> 요소에 바인딩 된 이벤트 핸들러 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // 서비스에서 히어로 목록을 받아오는 메서드
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

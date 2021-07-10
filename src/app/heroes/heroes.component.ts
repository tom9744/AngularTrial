import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';  // 사용자 지정 타입 
import { HEROES } from '../mock-heroes'; // 임시 영웅 데이터

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor() { }

  // 컴포넌트를 초기화하는 로직은 이 메소드에 작성한다.
  ngOnInit(): void {
  }

  // <li> 요소에 바인딩 된 이벤트 핸들러 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

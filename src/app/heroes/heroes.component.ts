import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  // TS 사용자정의 타입 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // 컴포넌트를 초기화하는 로직은 이 메소드에 작성한다.
  ngOnInit(): void {
  }
}

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

  constructor(private heroService: HeroService, 
              private messageService: MessageService) { }

  // 컴포넌트를 초기화하는 로직은 이 메소드에 작성한다.
  ngOnInit(): void {
    this.getHeroes();
  }

  // 서비스에서 히어로 목록을 받아오는 메서드
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    // 1. 변경된 내용으로 화면을 갱신하는 것은 컴포넌트가 처리
    this.heroes = this.heroes.filter(h => h !== hero);
    // 2. 히어로를 제거하는 기능은 HeroService가 담당
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

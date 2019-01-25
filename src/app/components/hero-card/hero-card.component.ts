import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};  
  @Input() index: number;

  @Output() heroSelect: EventEmitter<number>;

  constructor(private route: Router) { 
    this.heroSelect = new EventEmitter();
  }

  ngOnInit() {
  }

  verHero() {
    // this.route.navigate(['/hero', this.index]);
    this.heroSelect.emit(this.index);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HiraganaService } from 'src/app/services/hiragana.service';
// src/app/tu-ruta/tu-componente.page.ts
import { HiraganaCard } from '../../models/hiragana-card.model';

// Resto del código...


@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.page.html',
  styleUrls: ['./hiragana.page.scss'],
})
export class HiraganaPage implements OnInit {
  Hiraganas: HiraganaCard[] = [
    { symbol: 'あ', level: 1, romaji: 'a', isFlipped: false, isMatched: false, showTitle: false },
    { symbol: 'え', level: 1, romaji: 'e', isFlipped: false, isMatched: false, showTitle: false },
    { symbol: 'い', level: 1, romaji: 'i', isFlipped: false, isMatched: false, showTitle: false },
    { symbol: 'お', level: 1, romaji: 'o', isFlipped: false, isMatched: false, showTitle: false },
    { symbol: 'う', level: 1, romaji: 'u', isFlipped: false, isMatched: false, showTitle: false }
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private hiragana:HiraganaService
  ) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const level = params.get('level');
      this.hiragana.getHiraganaByLevel(level).subscribe(
        (response:any) => {
          this.Hiraganas = response.hiraganaInfo;
        },
        (err) =>{
          console.error(err)
        }
      )
    });
    this.shuffleHiraganas();
  }

  shuffleHiraganas() {
    this.Hiraganas = this.shuffleArray(this.Hiraganas);
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  flipCard(hiragana: any) {
    // Verifica si la tarjeta está emparejada o ya volteada
    if (!hiragana.isMatched && !hiragana.isFlipped) {
      // Voltea la tarjeta
      hiragana.isFlipped = true;

      // Espera un tiempo (por ejemplo, 1 segundo) y luego oculta el ion-card-title
      setTimeout(() => {
        hiragana.showTitle = true;
      }, 1000);
    }
  }

}

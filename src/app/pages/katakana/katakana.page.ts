import { Component, OnInit } from '@angular/core';
import { KatakanaService } from '../../services/katakana.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.page.html',
  styleUrls: ['./katakana.page.scss'],
})
export class KatakanaPage implements OnInit {
  Katakanas:any = []
  matchedCards:any[] = []
  constructor(
    private katakana:KatakanaService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const level = params.get('level');
      this.katakana.getKatakanaByLevel(level).subscribe(
        (response:any) => {
          this.Katakanas = response.katakanaInfo;
          console.log("Katakanas",this.Katakanas)
        },
        (err:any) =>{
          console.error(err)
        }
      )
    });
  }

  flipCard(katakana:any) {
    if (!katakana.isMatched) {
      katakana.isFlipped = !katakana.isFlipped;
    }
  }

  matchCards() {
    for (let i = 0; i < this.Katakanas.length; i++) {
      for (let j = i + 1; j < this.Katakanas.length; j++) {
        if (this.Katakanas[i].id === this.Katakanas[j].id &&
          this.Katakanas[i].isFlipped &&
          this.Katakanas[j].isFlipped) {
          this.Katakanas[i].isMatched = true;
          this.Katakanas[j].isMatched = true;
          this.matchedCards.push(this.Katakanas[i]);
          this.matchedCards.push(this.Katakanas[j]);
        }
      }
    }
  }

  ngAfterViewInit() {
    this.matchCards();
  }
}

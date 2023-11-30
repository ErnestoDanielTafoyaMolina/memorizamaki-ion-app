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
}

import { Component, OnInit } from '@angular/core';
import { KatakanaService } from 'src/app/services/katakana.service';

@Component({
  selector: 'app-katakana-board',
  templateUrl: './katakana-board.page.html',
  styleUrls: ['./katakana-board.page.scss'],
})
export class KatakanaBoardPage implements OnInit {

  levels:any=[]
  constructor( private katakanaService: KatakanaService ) { }

  ngOnInit() {
    this.katakanaService.getKatakana().subscribe(
      (response:any)=>{
        this.levels = response;
        console.log(this.levels)
      },
      (error:any)=>{
        console.error(error)
      }
    )
  }

}

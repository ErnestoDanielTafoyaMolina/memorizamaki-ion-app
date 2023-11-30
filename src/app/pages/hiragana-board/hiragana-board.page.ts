import { Component, OnInit } from '@angular/core';
import { HiraganaService } from 'src/app/services/hiragana.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiragana-board',
  templateUrl: './hiragana-board.page.html',
  styleUrls: ['./hiragana-board.page.scss'],
})
export class HiraganaBoardPage implements OnInit {

  levels:any = []
  constructor( private hiragana:HiraganaService, private router:Router ) { }

  ngOnInit() {
    this.hiragana.getHiragana().subscribe(
      (response:any) => {
         this.levels = response.data;
      },
      (error:any) => {
        console.error(error)
      }
    )
  }
  goToHiragana(level: any) {
    this.router.navigate(['/hiragana', level]);
  }
}

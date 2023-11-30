import { Component, OnInit } from '@angular/core';
import { HiraganaService } from 'src/app/services/hiragana.service';

@Component({
  selector: 'app-hiragana-board',
  templateUrl: './hiragana-board.page.html',
  styleUrls: ['./hiragana-board.page.scss'],
})
export class HiraganaBoardPage implements OnInit {

  levels:any = []
  constructor( private hiragana:HiraganaService ) { }

  ngOnInit() {

    console.log("Debería cargar esto que pedo")
    this.hiragana.getHiragana().subscribe(
      (response:any) => {
         this.levels = response.data;
      },
      (error:any) => {
        console.error(error)
      }
    )
  }

}

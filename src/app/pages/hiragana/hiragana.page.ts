import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HiraganaService } from 'src/app/services/hiragana.service';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.page.html',
  styleUrls: ['./hiragana.page.scss'],
})
export class HiraganaPage implements OnInit {
  Hiraganas:any = []
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
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KatakanaBoardPage } from './katakana-board.page';

describe('KatakanaBoardPage', () => {
  let component: KatakanaBoardPage;
  let fixture: ComponentFixture<KatakanaBoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KatakanaBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

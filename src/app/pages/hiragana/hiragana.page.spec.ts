import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiraganaPage } from './hiragana.page';

describe('HiraganaPage', () => {
  let component: HiraganaPage;
  let fixture: ComponentFixture<HiraganaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HiraganaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

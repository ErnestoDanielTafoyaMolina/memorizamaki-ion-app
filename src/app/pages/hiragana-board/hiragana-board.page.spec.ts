import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiraganaBoardPage } from './hiragana-board.page';

describe('HiraganaBoardPage', () => {
  let component: HiraganaBoardPage;
  let fixture: ComponentFixture<HiraganaBoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HiraganaBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

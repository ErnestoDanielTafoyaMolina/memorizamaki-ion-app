import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KatakanaPage } from './katakana.page';

describe('KatakanaPage', () => {
  let component: KatakanaPage;
  let fixture: ComponentFixture<KatakanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KatakanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

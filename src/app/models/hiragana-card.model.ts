// src/app/models/hiragana-card.model.ts
export interface HiraganaCard {
    symbol: string;
    level: number;
    romaji: string;
    isFlipped: boolean;
    isMatched: boolean;
    showTitle: boolean;
  }
  
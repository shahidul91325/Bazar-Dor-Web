export interface IPriceChange {
  dir: 'up' | 'down' | 'flat';
  pct: number;
}

export interface IMarketPrice {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface IPriceItem {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: IPriceChange;
  markets: IMarketPrice[];
}

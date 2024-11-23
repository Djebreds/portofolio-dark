export interface IWakaTimeWeek {
  worldRank: number | null;
  countryRank: number | null;
  totalSeconds: number;
  dailyAverage: number;
  languages: Array<{ name: string; total: string }>;
}

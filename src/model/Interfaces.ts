export interface MatchParams {
  id: number;
}

export interface Match<MatchParams> {
  params: MatchParams;
  isExact: boolean;
  path: string;
  url: string;
}

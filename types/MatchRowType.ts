export interface MatchRowTypeProps {
  team_1: string;
  team_2: string;
  score_1: number;
  score_2: number;
  status: string;
}

type Status = "Finished" | "Ongoing" | "Scheduled";

export interface MatchRowType {
  homeTeam: { name: string };
  awayTeam: { name: string };
  homeScore: number;
  awayScore: number;
  status: Status;
}

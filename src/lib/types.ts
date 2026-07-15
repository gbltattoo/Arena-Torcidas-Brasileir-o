export type Club = {
  id: string;
  name: string;
  shortName: string;
  crest: string;
  city?: string;
};

export type Match = {
  id: string;
  round: number;
  date: string;
  homeId: string;
  awayId: string;
  homeGoals: number | null;
  awayGoals: number | null;
  status: "scheduled" | "live" | "finished";
};

export type Player = {
  id: string;
  name: string;
  nickname: string;
  clubId: string;
  photo: string;
  position: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
};

export type News = {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
};

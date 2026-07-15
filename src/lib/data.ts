import { Club, Match, News, Player } from "./types";

export const initialClubs: Club[] = [
  { id: "flamengo", name: "Flamengo", shortName: "FLA", crest: "https://ui-avatars.com/api/?name=FLA&background=cc0000&color=ffffff&bold=true" },
  { id: "santa-cruz", name: "Santa Cruz", shortName: "SCZ", crest: "https://ui-avatars.com/api/?name=SCZ&background=111111&color=ffffff&bold=true" },
  { id: "corinthians", name: "Corinthians", shortName: "COR", crest: "https://ui-avatars.com/api/?name=COR&background=ffffff&color=111111&bold=true" },
  { id: "cruzeiro", name: "Cruzeiro", shortName: "CRU", crest: "https://ui-avatars.com/api/?name=CRU&background=0057b8&color=ffffff&bold=true" }
];

export const initialMatches: Match[] = [
  { id: "m1", round: 1, date: "2026-07-15T20:00", homeId: "flamengo", awayId: "santa-cruz", homeGoals: 5, awayGoals: 0, status: "finished" },
  { id: "m2", round: 1, date: "2026-07-16T20:00", homeId: "cruzeiro", awayId: "corinthians", homeGoals: null, awayGoals: null, status: "scheduled" }
];

export const initialPlayers: Player[] = [
  { id: "p1", name: "Jogador Exemplo", nickname: "Craque", clubId: "flamengo", photo: "https://ui-avatars.com/api/?name=Craque&background=6d28d9&color=fff", position: "Atacante", goals: 3, assists: 1, yellowCards: 0, redCards: 0 }
];

export const initialNews: News[] = [
  { id: "n1", title: "Flamengo estreia com goleada", summary: "Vitória por 5 a 0 abre o Brasileirão Arena Torcidas.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80", category: "Brasileirão", date: "2026-07-15" }
];

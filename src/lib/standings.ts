import { Club, Match } from "./types";

export type Standing = {
  club: Club;
  pts: number; j: number; v: number; e: number; d: number;
  gp: number; gc: number; sg: number;
};

export function calculateStandings(clubs: Club[], matches: Match[]): Standing[] {
  const map = new Map<string, Standing>();
  clubs.forEach(club => map.set(club.id, {club,pts:0,j:0,v:0,e:0,d:0,gp:0,gc:0,sg:0}));

  matches.filter(m => m.status === "finished" && m.homeGoals !== null && m.awayGoals !== null).forEach(m => {
    const home = map.get(m.homeId);
    const away = map.get(m.awayId);
    if (!home || !away) return;
    home.j++; away.j++;
    home.gp += m.homeGoals!; home.gc += m.awayGoals!;
    away.gp += m.awayGoals!; away.gc += m.homeGoals!;
    if (m.homeGoals! > m.awayGoals!) { home.v++; away.d++; home.pts += 3; }
    else if (m.homeGoals! < m.awayGoals!) { away.v++; home.d++; away.pts += 3; }
    else { home.e++; away.e++; home.pts++; away.pts++; }
  });

  const rows = [...map.values()];
  rows.forEach(r => r.sg = r.gp - r.gc);
  return rows.sort((a,b) =>
    b.pts-a.pts || b.v-a.v || b.sg-a.sg || b.gp-a.gp ||
    a.club.name.localeCompare(b.club.name, "pt-BR")
  );
}

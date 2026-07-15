"use client";
import Header from "@/components/Header";
import { useArenaStore } from "@/lib/store";
import { calculateStandings } from "@/lib/standings";

export default function Home(){
  const {state}=useArenaStore();
  const table=calculateStandings(state.clubs,state.matches);
  const finished=state.matches.filter(m=>m.status==="finished");
  return <><Header title="Portal Arena Torcidas"/><main className="content">
    <section className="hero"><p className="eyebrow">BRASILEIRÃO ARENA TORCIDAS</p><h2>O portal completo do campeonato</h2><p className="muted">Classificação, rodadas, clubes, jogadores, notícias, mata-mata e administração em um só lugar.</p></section>
    <section className="grid grid-4">
      <div className="card stat"><span>Clubes</span><strong>{state.clubs.length}</strong></div>
      <div className="card stat"><span>Partidas</span><strong>{state.matches.length}</strong></div>
      <div className="card stat"><span>Gols</span><strong>{finished.reduce((s,m)=>s+(m.homeGoals||0)+(m.awayGoals||0),0)}</strong></div>
      <div className="card stat"><span>Jogadores</span><strong>{state.players.length}</strong></div>
    </section>
    <section className="grid grid-2" style={{marginTop:18}}>
      <article className="card"><div className="card-header"><h3>Top 5</h3></div><div className="table-wrap"><table><thead><tr><th>Pos.</th><th>Clube</th><th>PTS</th><th>J</th><th>SG</th></tr></thead><tbody>{table.slice(0,5).map((r,i)=><tr key={r.club.id}><td>{i+1}</td><td><div className="club-cell"><img className="crest" src={r.club.crest}/>{r.club.name}</div></td><td>{r.pts}</td><td>{r.j}</td><td>{r.sg}</td></tr>)}</tbody></table></div></article>
      <article className="card"><div className="card-header"><h3>Últimos resultados</h3></div>{finished.slice(-4).reverse().map(m=>{const h=state.clubs.find(c=>c.id===m.homeId)!;const a=state.clubs.find(c=>c.id===m.awayId)!;return <div className="match" key={m.id}><div className="team"><img className="crest" src={h.crest}/>{h.name}</div><div className="score">{m.homeGoals} × {m.awayGoals}</div><div className="team away">{a.name}<img className="crest" src={a.crest}/></div></div>})}</article>
    </section>
  </main></>
}

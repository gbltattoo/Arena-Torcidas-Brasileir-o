"use client";
import Header from "@/components/Header";
import { useArenaStore } from "@/lib/store";

export default function Page(){
 const {state}=useArenaStore();
 return <><Header title="Partidas e rodadas"/><main className="content"><div className="grid">{state.matches.sort((a,b)=>a.round-b.round).map(m=>{const h=state.clubs.find(c=>c.id===m.homeId)!;const a=state.clubs.find(c=>c.id===m.awayId)!;return <article className="card" key={m.id}><div className="card-header"><b>{m.round}ª rodada</b><span className="muted">{new Date(m.date).toLocaleString("pt-BR")}</span></div><div className="match"><div className="team"><img className="crest" src={h.crest}/>{h.name}</div><div className="score">{m.status==="finished"?`${m.homeGoals} × ${m.awayGoals}`:"VS"}</div><div className="team away">{a.name}<img className="crest" src={a.crest}/></div></div></article>})}</div></main></>
}

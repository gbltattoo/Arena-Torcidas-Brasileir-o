"use client";
import Header from "@/components/Header";
import { useArenaStore } from "@/lib/store";
import { calculateStandings } from "@/lib/standings";

export default function Page(){
 const {state}=useArenaStore();const rows=calculateStandings(state.clubs,state.matches);
 return <><Header title="Classificação"/><main className="content"><article className="card"><div className="card-header"><div><p className="eyebrow">TABELA AUTOMÁTICA</p><h3>Brasileirão Arena Torcidas</h3></div></div><div className="table-wrap"><table><thead><tr><th>Pos.</th><th>Clube</th><th>PTS</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th></tr></thead><tbody>{rows.map((r,i)=><tr key={r.club.id}><td>{i+1}</td><td><div className="club-cell"><img className="crest" src={r.club.crest}/>{r.club.name}</div></td><td><b>{r.pts}</b></td><td>{r.j}</td><td>{r.v}</td><td>{r.e}</td><td>{r.d}</td><td>{r.gp}</td><td>{r.gc}</td><td>{r.sg}</td></tr>)}</tbody></table></div></article></main></>
}

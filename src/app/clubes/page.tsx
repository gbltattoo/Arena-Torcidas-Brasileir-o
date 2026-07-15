"use client";
import Header from "@/components/Header";import {useArenaStore} from "@/lib/store";
export default function Page(){const {state}=useArenaStore();return <><Header title="Clubes"/><main className="content"><div className="club-grid">{state.clubs.map(c=><article className="club-card" key={c.id}><img className="crest" src={c.crest}/><h3>{c.name}</h3><p className="muted">{c.shortName}</p></article>)}</div></main></>}

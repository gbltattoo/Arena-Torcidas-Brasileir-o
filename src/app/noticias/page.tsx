"use client";
import Header from "@/components/Header";import {useArenaStore} from "@/lib/store";
export default function Page(){const {state}=useArenaStore();return <><Header title="Notícias"/><main className="content"><div className="news-grid">{state.news.map(n=><article className="news-card" key={n.id}><img src={n.image}/><p className="eyebrow">{n.category}</p><h3>{n.title}</h3><p className="muted">{n.summary}</p></article>)}</div></main></>}

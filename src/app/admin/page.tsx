"use client";
import Header from "@/components/Header";
import {useArenaStore} from "@/lib/store";
import {Club,Match,Player,News} from "@/lib/types";
import {useState} from "react";

export default function Page(){
 const {state,save,reset}=useArenaStore();
 const [tab,setTab]=useState("clubes");

 function addClub(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const f=new FormData(e.currentTarget);
  const club:Club={id:crypto.randomUUID(),name:String(f.get("name")),shortName:String(f.get("shortName")),crest:String(f.get("crest"))};
  save({...state,clubs:[...state.clubs,club]});e.currentTarget.reset();
 }
 function addMatch(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const f=new FormData(e.currentTarget);const status=String(f.get("status")) as Match["status"];
  const match:Match={id:crypto.randomUUID(),round:Number(f.get("round")),date:String(f.get("date")),homeId:String(f.get("homeId")),awayId:String(f.get("awayId")),homeGoals:status==="finished"?Number(f.get("homeGoals")):null,awayGoals:status==="finished"?Number(f.get("awayGoals")):null,status};
  save({...state,matches:[...state.matches,match]});e.currentTarget.reset();
 }
 function addPlayer(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const f=new FormData(e.currentTarget);const p:Player={id:crypto.randomUUID(),name:String(f.get("name")),nickname:String(f.get("nickname")),clubId:String(f.get("clubId")),photo:String(f.get("photo")),position:String(f.get("position")),goals:0,assists:0,yellowCards:0,redCards:0};
  save({...state,players:[...state.players,p]});e.currentTarget.reset();
 }
 function addNews(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const f=new FormData(e.currentTarget);const n:News={id:crypto.randomUUID(),title:String(f.get("title")),summary:String(f.get("summary")),image:String(f.get("image")),category:String(f.get("category")),date:new Date().toISOString()};
  save({...state,news:[...state.news,n]});e.currentTarget.reset();
 }

 return <><Header title="Administração"/><main className="content">
  <div className="admin-tabs">{["clubes","partidas","jogadores","noticias","backup"].map(t=><button className="btn" onClick={()=>setTab(t)} key={t}>{t}</button>)}</div>

  {tab==="clubes"&&<div className="grid grid-2"><article className="card"><div className="card-body"><h3>Novo clube</h3><form className="form" onSubmit={addClub}><label>Nome<input className="input" name="name" required/></label><label>Sigla<input className="input" name="shortName" required/></label><label>URL do escudo<input className="input" name="crest" required/></label><button className="btn primary">Salvar</button></form></div></article><article className="card"><div className="card-body"><h3>Clubes</h3>{state.clubs.map(c=><div className="admin-row" key={c.id}><span>{c.name}</span><button className="btn danger" onClick={()=>save({...state,clubs:state.clubs.filter(x=>x.id!==c.id)})}>Excluir</button></div>)}</div></article></div>}

  {tab==="partidas"&&<div className="grid grid-2"><article className="card"><div className="card-body"><h3>Nova partida</h3><form className="form" onSubmit={addMatch}><label>Rodada<input className="input" type="number" name="round" required/></label><label>Data<input className="input" type="datetime-local" name="date" required/></label><label>Mandante<select className="input" name="homeId">{state.clubs.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}</select></label><label>Visitante<select className="input" name="awayId">{state.clubs.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}</select></label><label>Status<select className="input" name="status"><option value="scheduled">Agendada</option><option value="finished">Encerrada</option></select></label><label>Gols mandante<input className="input" type="number" name="homeGoals"/></label><label>Gols visitante<input className="input" type="number" name="awayGoals"/></label><button className="btn primary">Salvar</button></form></div></article><article className="card"><div className="card-body"><h3>Partidas</h3>{state.matches.map(m=><div className="admin-row" key={m.id}><span>{m.round}ª rodada</span><button className="btn danger" onClick={()=>save({...state,matches:state.matches.filter(x=>x.id!==m.id)})}>Excluir</button></div>)}</div></article></div>}

  {tab==="jogadores"&&<article className="card"><div className="card-body"><h3>Novo jogador</h3><form className="form" onSubmit={addPlayer}><label>Nome<input className="input" name="name" required/></label><label>Apelido<input className="input" name="nickname" required/></label><label>Clube<select className="input" name="clubId">{state.clubs.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}</select></label><label>Foto URL<input className="input" name="photo" required/></label><label>Posição<input className="input" name="position" required/></label><button className="btn primary">Salvar</button></form></div></article>}

  {tab==="noticias"&&<article className="card"><div className="card-body"><h3>Nova notícia</h3><form className="form" onSubmit={addNews}><label>Título<input className="input" name="title" required/></label><label>Resumo<textarea className="input" name="summary" required/></label><label>Imagem URL<input className="input" name="image" required/></label><label>Categoria<input className="input" name="category" required/></label><button className="btn primary">Publicar</button></form></div></article>}

  {tab==="backup"&&<article className="card"><div className="card-body"><h3>Backup</h3><div className="actions"><button className="btn primary" onClick={()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:"application/json"}));a.download="arena-backup.json";a.click()}}>Baixar backup</button><button className="btn danger" onClick={reset}>Restaurar dados iniciais</button></div></div></article>}
 </main></>
}

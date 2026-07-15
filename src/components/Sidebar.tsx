import Link from "next/link";
import "./../app/globals.css";

const links = [
  ["🏠","/","Início"],["🏆","/classificacao","Classificação"],["⚽","/partidas","Partidas"],
  ["🧩","/mata-mata","Mata-mata"],["🛡️","/clubes","Clubes"],["👤","/jogadores","Jogadores"],
  ["📰","/noticias","Notícias"],["📜","/regulamento","Regulamento"],["🎥","/streamers","Streamers"],
  ["⚙️","/admin","Administração"]
];

export default function Sidebar(){
  return <aside className="sidebar">
    <div className="brand">ARENA TORCIDAS<span>Portal esportivo oficial</span></div>
    <nav className="nav">{links.map(([icon,href,label])=><Link key={href} href={href}>{icon} {label}</Link>)}</nav>
  </aside>
}

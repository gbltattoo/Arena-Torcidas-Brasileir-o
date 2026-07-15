import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arena Torcidas",
  description: "Portal oficial esportivo Arena Torcidas RP",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR"><body><div className="layout"><Sidebar/><div className="main">{children}</div></div></body></html>
}

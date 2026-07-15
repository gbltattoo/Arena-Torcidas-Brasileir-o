import Header from "@/components/Header";
const rules=["Vitória vale 3 pontos; empate vale 1 ponto; derrota vale 0.","Critérios de desempate: pontos, vitórias, saldo de gols, gols marcados e ordem alfabética.","Resultados somente podem ser alterados pela administração.","Casos não previstos serão analisados pela coordenação da Arena Torcidas."];
export default function Page(){return <><Header title="Regulamento"/><main className="content"><article className="card">{rules.map((r,i)=><div className="rule" key={r}><b>{i+1}.</b> {r}</div>)}</article></main></>}

import Layout from "../components/Layout";
import Cabecalho from "../components/Cabecalho";
import Link from 'next/link'
export default function Exemplo() {
    return (
        <Layout titulo="Execução do teste para entrevista.">
        <div>
            <Cabecalho titulo="Lista de vídeos" />
            <Link href="/">Voltar</Link>
        </div>
        </Layout>
        
    )
}
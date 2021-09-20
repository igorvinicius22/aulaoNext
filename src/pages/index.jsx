import Navegador from '../components/Navegador'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
                <Navegador texto="Estiloso" destino="/estiloso" />
                <Navegador texto="Exemplo" destino="/exemplo" cor="limegreen" />
                <Navegador texto="Youtube" destino="/youtube" cor="red" />
                <Navegador texto="Navegação #2" destino="/cliente/MG/123" cor="orange" />
                <Navegador texto="Componente com estado" destino="/estado" cor="lime" />
                <Navegador texto="Integração com API #01" destino="/integracao_01" cor="midnightblue" />
        </div>
    )
}
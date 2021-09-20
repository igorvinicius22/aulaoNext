import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo= "Lista de Vídeos">
        <div className={styles.azul}>
            <h1>Estilos usando CSS Módulos</h1>
        </div>
        </Layout>
    )
}
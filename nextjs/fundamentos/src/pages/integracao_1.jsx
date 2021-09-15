import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [codigo, setCodigo] = useState(0)
    const [cliente, setCliente] = useState({})

    async function getCliente() {
        const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const data = await res.json()
        setCliente(data)
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)} />
                <button onClick={getCliente(codigo)}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}
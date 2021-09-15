export default function Cabecalho (props) {
    // props are just read only
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}
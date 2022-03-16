// embora seja interessante fazer componentes reusáveis
// as vezes a gente cria componentes pensando em cenários mais complexos que não se realizam
// esse Button, qual é a proposta dele?
function Button(props) {
    const { value, onClick } = props
    return (
        <button onClick={onClick}>{value}</button>
    )
}

export default Button
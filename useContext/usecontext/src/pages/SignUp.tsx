import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../contexts/Contexts'

export const SignUp = () => {
    const { state, dispatch } = useContext(Context)
    const [name, setName]  = useState('')
    const [age, setAge] = useState<number>(0)

    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    function handleChangeAge(e: React.ChangeEvent<HTMLInputElement>) {
        setAge(parseInt(e.target.value))
    }
    function salvar(){
        dispatch({
            type: 'CHANGE_NAME',
            payload: {name}
        })
        dispatch({
            type: 'CHANGE_AGE',
            payload: {age}
        })
    }
    const id: string  = state.user.age < 2 ? 'ano' : "anos"
    return (
        <div>
            <h3>SignUp SignUp Tema: {state.theme.status}</h3>
            <input type="text" name="" placeholder='Digite um nome' value={name} onChange={handleChangeName}/>
            <input type="number" name="" placeholder='Digite uma idade' value={age} onChange={handleChangeAge}/>
            <button onClick={salvar}>Salvar</button>
            <h1>Seu nome é: {state.user.name} e você tem {state.user.age} {id}.</h1>
            <br />
            <Link to='/exibir'>Ir para showData</Link>
        </div>
    )
}
import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

function App() {
  const [list, dispatch] = usePeopleList();
  const [name, setName] = useState('')

  const handleAddButton = () => {
    if(name){
      dispatch({
        type: 'ADD',
        payload:{
          name: name
        }
      })
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const deletePerson = (id: string) => {
    dispatch({
      type:'DEL',
      payload: {id}
    })
  }

  const handleOrder = () => {
    dispatch({
      type: 'ORDER'
    })
  }
  return (
    <div className="p-5">
      <input type="text" value={name} onChange={handleInputChange}/>
      <button onClick={handleAddButton}>Adicionar</button>

      <hr />
      <button onClick={handleOrder}>Ordenar</button>
      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index} className="p-2">
            {item.name}
            <button onClick={() => deletePerson(item.id)}> [- deleta] </button>
          </li>
        ))}
      </ul>
    </div>
  );

};


export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { Context } from "./contexts/Contexts";
import { useContext } from 'react'

function App() {
  const { state, dispatch } = useContext(Context)

  function handleTheme() {
    if (state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })
    }
  }

  return (
    <BrowserRouter>
      <div className={state.theme.status === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
        <h1>Title</h1>
        <button onClick={handleTheme}>Tema: {state.theme.status}</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
import { useAppSelector } from './redux/hooks/useAppSelectors'
import { setName, setAge } from './redux/reducers/userReducer'
import { useDispatch } from 'react-redux'
import { setTheme } from './redux/reducers/themeReducer'

function App() {
  const user = useAppSelector((state) => state.user)
  const status = useAppSelector((state) => state.theme)

  const dispatch = useDispatch()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value))
  }
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value))
  }
  const changeTheme = (newTheme: string) => dispatch(setTheme(newTheme))
  const themeChange = () => {
    // if (status.theme === 'light') {
    //   dispatch(setTheme('dark'))
    // } else {
    //   dispatch(setTheme('light'))
    // }
    changeTheme(status.theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{
      backgroundColor: status.theme === 'light' ? 'white' : 'black',
      color: status.theme === 'light' ? 'black' : 'white'
    }}>
      <div className="App">
        Meu nome é: {user.name} e tenho {user.age} anos. <br />
        Tema: ...
        <hr />
        <input type="text" value={user.name} onChange={handleName} />
        <input type="text" value={user.age} onChange={handleAge} />
        <hr />
        <button onClick={themeChange}>{status.theme}</button>
      </div>
    </div>
  );
}

export default App;

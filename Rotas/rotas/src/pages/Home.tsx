import { Link } from "react-router-dom"


export const Home = () => {
    return (
        <div>
            Página home
            <Link to="/about">Sobre</Link>
        </div>
    )
}
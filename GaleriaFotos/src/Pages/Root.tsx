import { Gallery } from "../components/Gallery";
import {Outlet} from 'react-router-dom'

export function Root() {
    return (
        <>
            <header>
                <Gallery />
            </header>
            <hr />
            <main>
                <Outlet/>
            </main>
        </>
    )
}
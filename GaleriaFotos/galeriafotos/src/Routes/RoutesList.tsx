import { useRoutes } from 'react-router-dom'
import { Albuns } from '../Pages/Albuns'
import { Root } from '../Pages/Root'
import { Album } from '../Pages/Album';
import { Photo } from '../Pages/Photo';

export const RoutesList = () => {
    return useRoutes([
        {
            path: '/',
            element: (<Root />),
            children: [
                { path: '/', element: <Albuns /> },
                { path: '/albums/:album', element: <Album /> },
                { path:'/photos/:photo', element: <Photo/>}
            ]
        }
    ]);
};
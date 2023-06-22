import { useEffect, useState } from 'react'
import { api } from '../Services/api'
import { Albums } from '../types/albums'
import { Link } from 'react-router-dom'

export function Albuns() {
    const [albums, setAlbums] = useState<Albums[]>([])
    useEffect(() => {
        handleAlbums()
    }, [])

    const handleAlbums = async () => {
        try {
            const allAlbums = await api.getAllAlbums();
            setAlbums(allAlbums);
        } catch (error) {
            console.error('Erro ao obter a lista de álbuns:', error);
        }
    };

    return (
        <div>
            {albums.map((album, index) => {
                return (
                    <div key={index} className='p-3 m-2 border-4 border-black w-screen bg-white hover:bg-slate-400'>
                        <Link to={`/albums/${album.id}`}>{album.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}
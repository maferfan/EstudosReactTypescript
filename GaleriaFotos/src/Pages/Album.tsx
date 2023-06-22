import { useState, useEffect } from "react"
import { api } from "../Services/api"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Foto } from "../types/fotos"
import { Albums } from "../types/albums"


export function Album() {
    const [albums, setAlbums] = useState<Albums>()
    const [photoList, setPhotoList] = useState<Foto[]>([])
    const id = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id.album) {
            handleAlbum(id.album)
            loadPhotos(id.album)
        }
    }, [])

    const handleAlbum = async (id: string) => {
        try {
            const json = await api.getAlbumById(id)
            setAlbums(json)
        } catch (error) {
            console.log(error)
        }
    }

    const loadPhotos = async (id: string) => {
        try {
            const json = await api.getPhotosByAlbum(id)
            setPhotoList(json)
        } catch (error) {
            console.log(error)
        }
    }

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button className="m-2 p-4 border rounded-full" onClick={back}>Voltar</button>
            <hr />
            <div className="m-2  pb-2 pt-1">
                {albums?.title}
            </div>
            <div className="grid grid-cols-10 gap-4">
                {photoList.map((photo, idx) => {
                    return (
                        <div key={idx} className="p-2 border border-black bg-white hover:bg-slate-400">
                            <Link to={`/photos/${photo.id}`}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
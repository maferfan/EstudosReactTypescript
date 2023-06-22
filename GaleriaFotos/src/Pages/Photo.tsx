import { useState, useEffect } from 'react'
import { api } from '../Services/api'
import { Foto } from '../types/fotos'
import { useNavigate, useParams } from 'react-router-dom'

export function Photo() {
    const [photos, setPhotos] = useState<Foto>()
    const id = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (id.photo) {
            loadPhoto(id.photo)
        }
    }, [])

    const loadPhoto = async (id: string) => {
        try {
            const json = await api.getPhotosById(id)
            setPhotos(json)
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
                {photos?.title}
            </div>
            <div>
                <img src={photos?.thumbnailUrl} alt="" width={600} height={600}/>
            </div>
        </div>
    )
}
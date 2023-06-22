import { Post } from "../types/Post"

type Props = {
    data: Post
}

export const Postitem = ({ data }: Props) => {
    
    return(
    <div className="m-4">
        <h4 className="font-bold">{data.title}</h4>
        <small>#{data.id} - Usuário: {data.userId}</small>
        <p>{data.body}</p>
    </div>
    )
}
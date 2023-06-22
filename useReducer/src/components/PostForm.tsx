import { ChangeEvent, useState } from "react";

type Props = {
    onAdd: (title: string, body:string) => void;
}

export function Postform({onAdd}: Props) {
    const [addTitle, setAddTitle] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitle(e.target.value)
    }

    const handleAddBodyText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }

    const handleAddpost = async () => {
        if (addBodyText && addTitle) {
            onAdd(addTitle, addBodyText)
        } else {
            alert("Preencha os dados.")
        }
    }

    return (
        <>
            <fieldset className="border-2 m-3 p-3">
                <legend>Adicionar novo post</legend>

                <input
                    value={addTitle}
                    onChange={handleAddTitle}
                    className="border block"
                    type="text"
                    placeholder="Digite um título"
                />

                <textarea
                    className="border block"
                    value={addBodyText}
                    onChange={handleAddBodyText}
                >

                </textarea>

                <button className="border block" onClick={handleAddpost}>Adicionar</button>
            </fieldset>
        </>
    )
}
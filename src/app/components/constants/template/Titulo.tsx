import { ElementType } from "react";

export interface TituloProps {
    texto: string;
    icone: ElementType;
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex items-center gap-2 p-2 bg-[#f58634] mb-4">
            <props.icone size={50} />
            <div className="text-2xl">
                <h1>{props.texto}</h1>
            </div>
        </div>
    )
}
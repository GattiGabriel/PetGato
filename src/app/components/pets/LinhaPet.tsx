
import { Animal } from "@core/model/Animal"
import Image from "next/image"

export interface LinhaPetProps {
    animal: Animal
}

export default function LinhaPet(props: LinhaPetProps) {
    return (
        <div className="flex bg-[#d6752d] rounded-sm p-4 h-20">
            <div className="flex items-center gap-16 w-full">
                <Image
                    src="https://placehold.co/80x80.png"
                    width={80}
                    height={80}
                    alt="Avatar"
                />
                <div className="flex flex-col">
                    <span><strong>Nome:</strong> {props.animal.nome}</span>
                    <span><strong>Idade:</strong> {props.animal.idade}</span>
                </div>
                <div className="flex flex-col">
                    <span><strong>Raça:</strong> {props.animal.raca}</span>
                    <span><strong>Porte:</strong> {props.animal.porte}</span>
                </div>
                <div className="flex flex-col">
                    <span><strong>Dono:</strong> {props.animal.donoId}</span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2 w-[40%] ">
                <div className="flex items-center rounded-sm bg-[#959595] h-7 w-fit px-2">
                    <button>Ver Dono</button>
                </div>
                <div className="flex items-center rounded-sm bg-[#959595] h-7 w-fit px-2">
                    <button>Editar Dados</button>
                </div>
            </div>
        </div>
    )
}
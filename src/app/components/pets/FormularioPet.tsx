
import { Animal } from "@core/model/Animal";
import InputTexto from "../shared/InputTexto";


export interface FormularioPetProps {
    animal: Animal;
    onChange: (animal: Animal) => void;
}

export default function FormularioPet(props: FormularioPetProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto label={"Nome"} value={props.animal.nome} onChange={(e) => props.onChange?.({...props.animal, nome: e.target.value})}/>
            <InputTexto label={"Raça"} value={props.animal.raca} onChange={(e) => props.onChange?.({...props.animal, raca: e.target.value})}/>
            <InputTexto label={"Porte"} value={props.animal.porte} onChange={(e) => props.onChange?.({...props.animal, porte: e.target.value})}/>
            <InputTexto label={"Idade"} value={props.animal.idade} onChange={(e) => props.onChange?.({...props.animal, idade: Number(e.target.value)})}/>
            <InputTexto label={"Observaçõ"} value={props.animal.observacao} onChange={(e) => props.onChange?.({...props.animal, observacao: e.target.value})}/>
            <div className="flex gap-5">
                <button className="bg-blue-500 px-4 py-2 rounded-sm">Salvar</button>
                <button className="bg-red-500 px-4 py-2 rounded-sm">Apagar</button>
            </div>
        </div>
    )
}
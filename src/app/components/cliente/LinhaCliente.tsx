import { Cliente } from "@/core/model/Cliente";

export interface LinhaClienteProps {
    cliente: Cliente
}

export default function LinhaCliente(props: LinhaClienteProps) {
    return (
        <div className="flex bg-[#d6752d] rounded-sm p-4 h-20">
            <div className="flex items-center gap-16 w-full">
                <div className="flex flex-col">
                    <span><strong>Nome:</strong> {props.cliente.nome}</span>
                    <span><strong>Nome:</strong> {props.cliente.phone}</span>
                </div>
                <div className="flex flex-col">
                    <span><strong>Endereço:</strong> {props.cliente.logradouro}, {props.cliente.numero}</span>
                    <span>Bairro {props.cliente.bairro}</span>
                    <span>{props.cliente.complemento ? ((`Complemento: ${props.cliente.complemento}`)) : ''}</span>
                </div>
                <div className="flex flex-col">
                    <span><strong>Contato:</strong> {props.cliente.phone}</span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2 w-[40%] ">
                <div className="flex items-center rounded-sm bg-[#959595] h-7 w-fit px-2">
                    <button>Ver Pets</button>
                </div>
                <div className="flex items-center rounded-sm bg-[#959595] h-7 w-fit px-2">
                    <button>Editar Dados</button>
                </div>
            </div>
        </div>
    )
}
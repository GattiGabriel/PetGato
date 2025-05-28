import clientes from "@/app/data/clientes"
import LinhaCliente from "./LinhaCliente"

export default function ListaCliente() {
    return <div className="flex flex-col gap-4">
        {clientes.map((cliente) => {
            return <LinhaCliente key={cliente.id} cliente={cliente}/>
        })}
    </div>
}
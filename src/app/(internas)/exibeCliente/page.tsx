import { BsFillPersonVcardFill } from "react-icons/bs";
import ListaCliente from "src/app/components/cliente/ListaCliente";
import Pagina from "src/app/components/constants/template/Pagina";
import Titulo from "src/app/components/constants/template/Titulo";

export default function Page() {
    return (
        <Pagina>
            <Titulo  icone={BsFillPersonVcardFill} texto="Ver Clientes"/>
            <ListaCliente />
        </Pagina>
    )
}
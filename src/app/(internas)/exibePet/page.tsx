
import { GiDogHouse } from "react-icons/gi";
import Pagina from "src/app/components/constants/template/Pagina";
import Titulo from "src/app/components/constants/template/Titulo";
import ListaPet from "src/app/components/pets/ListaPet";

export default function Page() {
    return (
        <Pagina>
            <Titulo  icone={GiDogHouse} texto="Ver Pets"/>
            <ListaPet />
        </Pagina>
    )
}
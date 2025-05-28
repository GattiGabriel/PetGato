"use client"
import { PiDogBold } from "react-icons/pi";
import Pagina from "src/app/components/constants/template/Pagina";
import Titulo from "src/app/components/constants/template/Titulo";
import CadastroPet from "src/app/components/pets/CadastroPet";


export default function Page() {
    return (
        <Pagina>
            <Titulo texto={"Cadastrar Pets"} icone={PiDogBold} />
            <CadastroPet />
        </Pagina>
    )
}
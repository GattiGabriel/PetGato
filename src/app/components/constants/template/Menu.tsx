/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { ReactNode } from "react";
import { FaCalendarAlt  } from "react-icons/fa";
import { PiDogBold } from "react-icons/pi";
import { GiDogHouse } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";


export interface MenuProps {
    text: string;
    href: string;
    icon: ReactNode;
}

function MenuItem(props: MenuProps) {
    return (
        <div>
            <Link className="flex flex-row justify-start items-center py-4 p-3 text-lg hover:bg-[#d6752d]" href={props.href}>
                {props.icon}
                <span className="ml-2">{props.text}</span>
            </Link>
        </div>
    )
}

export default function Menu() {
    return (
        <aside className="w-60">
            <nav className="flex flex-col bg-[#f58634] h-screen">
                <MenuItem text={"Agenda"} href={"/agenda"} icon={<FaCalendarAlt />}></MenuItem>
                <MenuItem text={"Cadastrar pets"} href={"/cadastroPet"} icon={<PiDogBold />}></MenuItem>
                <MenuItem text={"Ver pets"} href={"/exibePet"} icon={<GiDogHouse />}></MenuItem>
                <MenuItem text={"Cadastrar clientes"} href={"/cadastroCliente"} icon={<IoPersonAddSharp />}></MenuItem>
                <MenuItem text={"Ver clientes"} href={"/exibeCliente"} icon={<BsFillPersonVcardFill />}></MenuItem>
                <MenuItem text={"Gerar relatório"} href={"/relatorio"} icon={<LuFileSpreadsheet />}></MenuItem>
            </nav>
        </aside>
    )
}
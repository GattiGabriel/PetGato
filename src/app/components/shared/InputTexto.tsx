import { InputHTMLAttributes } from "react";

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function InputTexto(props: InputTextoProps) {
    return (
        <div className="flex flex-col gap-1">
            <label>{props.label}</label>
            <input {...props} className="p-2 rounded-md border-[3px] border-zinc-500"/>
        </div>
    )
}
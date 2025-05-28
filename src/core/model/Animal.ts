import { Banho } from "./Banho"

export interface Animal {
    id: number,
    nome: string,
    raca: string,
    porte: string,
    idade: number,
    observacao: string | undefined,
    donoId: number,
    banhos: Banho[],
}
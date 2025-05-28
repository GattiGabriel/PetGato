import { Banho } from "./Banho"
import { Animal } from "./Animal";

export interface Cliente {
    id: number,
    nome: string,
    bairro: string,
    rua: string,
    numero: string,
    complemento: string | undefined,
    email: string | undefined,
    telefone: string,
    pets: Animal[],
    banhos: Banho[],
}
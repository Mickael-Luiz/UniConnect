import { EnderecoInterface } from "./EnderecoInterface";

export interface UsuarioInterface {
  id: number;
  nome: string;
  email: string;
  dataCadastro?: string;
  telefone?: string;
  endereco?: EnderecoInterface;
}

export interface UsuarioCreateInterface {
  nome: string
  email: string
}
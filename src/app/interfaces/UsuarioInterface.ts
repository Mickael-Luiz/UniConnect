import { EnderecoInterface } from "./EnderecoInterface";

export interface UsuarioInterface {
  id: number;
  nome: string;
  email: string;
  dataCadastro?: string;
  telefone?: string;
  endereco?: EnderecoInterface;
}

export interface UsuarioPFCreateInterface {
  nome: string
  email: string
}

export interface UsuarioPJCreateInterface {
  cnpj: string
  razaoSocial: string
  email: string
}

export interface ConfirmarSenhaInterface {
  token: string,
  senha: string,
  tipo: string
}
export interface DisciplinaInterface {
  id: number,
  titulo: string,
  cargaHoraria: number
}

export interface DisciplinaSelecionadaInterface {
  disciplina: DisciplinaInterface,
  professor: string,
  diaSemana: string,
  horarios: number[]
}
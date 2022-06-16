export type Usuario = {
  nombre: string,
  email: string,
  password: string,
  id?: number
}

export type Credenciales = {
  email: string,
  password: string,
}

export type Token = {
  token: string
}

export type TokenPayload = {
  username: string,
  iat: number
}
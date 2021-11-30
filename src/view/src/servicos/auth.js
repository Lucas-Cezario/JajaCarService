export const TOKEN = "token";
export const NOME = "nome";

export const login = token => {localStorage.setItem(TOKEN,token)};
export const logout = () => {localStorage.clear()};
export const getToken = localStorage.getItem(TOKEN);

export const setNome = nome => {localStorage.setItem(NOME,nome)};
export const getNome = localStorage.getItem(NOME);




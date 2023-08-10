export const PORT = 3000;

export const API = `http://localhost:${PORT}/`

export const signInURL = "signin/"

export const PARSE_JSON = res => res.json()

export const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}
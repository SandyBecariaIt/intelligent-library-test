import { buildRequest } from './../../../utils/network'

export async function getBooks() {
    const request = buildRequest('/books')
    const response = await fetch(request);
    const data = await response.json()
    return data
}

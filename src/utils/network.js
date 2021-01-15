
const url = 'http://localhost:3001'

export function buildRequest(uri) {
    return new Request(`${url}${uri}`, {
        method: 'GET',
        redirect: 'follow'
      })
}
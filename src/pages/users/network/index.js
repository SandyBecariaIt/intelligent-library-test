import { buildRequest } from './../../../utils/network'

export async function getUsers() {
    const request = buildRequest('/users')
    const response = await fetch(request);
    const data = await response.json()
    return data
}

export async function userProfile(enrollment) {
    const request = buildRequest(`/user-profile?enrollment=${enrollment}`)
    const response = await fetch(request);
    const data = await response.json()
    return data
}
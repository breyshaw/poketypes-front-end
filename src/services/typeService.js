import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/types`

function create(type) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(type),
  })
    .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
    .then(res => res.json())
}

function deleteType(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
}

function update(type) {
  return fetch(`${BASE_URL}/${type._id}`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(type),
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  deleteType,
  update
}
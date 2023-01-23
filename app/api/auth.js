import client from './client'

const login = (phone, password) =>
  client.post('/login.php', { phone, password })

export default {
  login,
}

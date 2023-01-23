import client from './client'

const endpoint1 = '/users.php'
const endpoint2 = '/user_register.php'
const endpoint3 = '/user_login.php'
const endpoint4 = '/user_update.php'
const endpoint5 = '/admins.php'
const endpoint6 = '/managers.php'
const endpoint7 = '/conductors.php'

const getUsers = () => client.get(endpoint1)
const getAdmins = () => client.get(endpoint5)
const getManagers = () => client.get(endpoint6)
const getConductors = () => client.get(endpoint7)

const addUser = (user) => {
  const data = {
    uname: user.uname,
    uphone: user.uphone,
    upassword: user.upassword,
  }

  // if (user.location) data.append("location", JSON.stringify(user.location));

  return client.post(
    endpoint2,
    data,
    //   , {
    //   onUploadProgress: (progress) =>
    //     onUploadProgress(progress.loaded / progress.total),
    // }
  )
}

const login = (user) => {
  const data = {
    uphone: user.uphone,
    upassword: user.upassword,
  }
  return client.post(endpoint3, data)
}

const updateUser = (user) => {
  const data = {
    ufname: user.ufname,
    ulname: user.ulname,
    uemail: user.uemail,
    uphone: user.uphone,
  }
  return client.put(endpoint4, data)
}

export default {
  getAdmins,
  getConductors,
  getManagers,
  addUser,
  getUsers,
  login,
  updateUser,
}

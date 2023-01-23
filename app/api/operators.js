import client from './client'

const endpoint1 = '/operators.php'
const endpoint2 = '/operator_register.php'
const endpoint3 = '/operator_update.php'
const endpoint4 = '/operatorsby_coid.php'

const getOperators = () => client.get(endpoint1)

const addOperator = (operator, onUploadProgress) => {
  const data = {
    co_id: operator.company.co_id,
    vo_lname: operator.vo_lname,
    vo_phone: operator.vo_phone,
    vo_position: operator.position.label,
    vo_password: operator.vo_password,
  }

  // if (operator.location)
  //   data.append('location', JSON.stringify(operator.location))

  return client.post(endpoint2, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

const getOperatorByCompany = (user) => {
  const data = {
    co_id: user.co_id,
  }

  return client.post(endpoint4, data)
}

const updateOperator = (operator, onUploadProgress) => {
  const data = {
    co_id: operator.company.co_id,
    vo_lname: operator.vo_lname,
    vo_fname: operator.vo_fname,
    vo_email: operator.vo_email,
    vo_phone: operator.vo_phone,
    vo_position: operator.position.label,
    vo_id: operator.vo_id,
  }

  // if (operator.location)
  //   data.append('location', JSON.stringify(operator.location))

  return client.post(endpoint3, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

export default {
  addOperator,
  getOperators,
  getOperatorByCompany,
  updateOperator,
}
